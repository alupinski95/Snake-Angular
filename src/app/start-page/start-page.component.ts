import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenState } from 'src/shared/enums/screenStateEnum';
import { Keyboard } from 'src/shared/enums/keyboardEnum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == Keyboard.Enter) {
      this.router.navigate(['/collect-user-data']);
    }
  }
}
