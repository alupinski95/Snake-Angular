import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard from "simple-keyboard";
import { UserdataService } from 'src/shared/services/userdata.service';
import { Router } from '@angular/router';
import { ScoreFacade } from 'src/shared/facade/score.facade';
import { Succes } from 'src/shared/models/Succes';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
    public keyboard: Keyboard;
    public inputName: any;
    private _checkTokenSubscriber$: Subscription;
    public userForm: FormGroup;

    constructor(
        private userdataService: UserdataService,
        public scoreFacade: ScoreFacade,
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.userForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.minLength(6)]],
            isBlack: [false],
            token: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[0-9]{4}')]]
        });
    }
    ngOnDestroy(): void {
        this._checkTokenSubscriber$.unsubscribe();
    }
    submitForm(form: FormGroup) {
        this._checkTokenSubscriber$ = this.scoreFacade.checkToken({ "auth-token": this.tokenForm?.value }).subscribe(
            (next: Succes) => {
                this.scoreFacade.isTokenValid = next.success;
                if (next.success)
                    this.afterTokenValidateCalback();
            }
        );
    }

    afterTokenValidateCalback() {
        this.userdataService.userName = this.name?.value;
        this.userdataService.userEmail = this.email?.value;
        this.userdataService.token = this.tokenForm?.value;
        this.router.navigate(['/menu',this.userForm.get('isBlack')?.value]);
    }

    backButton() {
        this.router.navigate(['/']);
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
        this.userForm.get(this.inputName)?.setValue(input);

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
    get name() {
        return this.userForm.get('name');
    }
    get tokenForm() {
        return this.userForm.get('token');
    }
    get email() {
        return this.userForm.get('email');
    }
}
