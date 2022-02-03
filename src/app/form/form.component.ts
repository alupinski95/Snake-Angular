import { Component, HostListener, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ScreenState } from 'src/shared/enums/screenStateEnum';
import { UserModel } from 'src/shared/models/User';
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() showGame = new EventEmitter<ScreenState>();
  @Output() sendFormData = new EventEmitter<UserModel>();
  public keyboard: Keyboard;
  public inputName: any;
  public user: any = { name: '', email: '' }
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    this.showGame.emit(ScreenState.GameScreen);
    this.sendFormData.emit(this.user);
  }
  backButton() {
    this.showGame.emit(ScreenState.StartScreen);
  }





  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      inputName: this.inputName,
      onChange: input => this.onChange(input),
      onKeyPress: (button: any) => this.onKeyPress(button),
      preventMouseDownDefault: true
    });
  }


  onInputFocus = (event: any) => {
    this.inputName = event.target.id;
    this.keyboard.setOptions({
      inputName: event.target.id
    });
  };

  onChange = (input: string) => {
    this.user[this.inputName] = input;

    let caretPosition = this.keyboard.caretPosition;

    if (caretPosition !== null)
      this.setInputCaretPosition(
        document.querySelector(`#${this.inputName}`),
        caretPosition
      );
  };

  setInputCaretPosition = (elem: any, pos: number) => {
    if (elem.setSelectionRange) {
      elem.focus();
      elem.setSelectionRange(pos, pos);
    }
  };

  onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }
}
