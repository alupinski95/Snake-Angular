import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenState } from 'src/shared/enums/screenStateEnum';
import { Keyboard } from 'src/shared/enums/keyboardEnum';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  @Output() showForm = new EventEmitter<ScreenState>();
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == Keyboard.Enter) {
      this.showForm.emit(ScreenState.FormScreen);
    }
  }
}
