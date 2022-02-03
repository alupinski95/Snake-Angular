import { Component } from '@angular/core';
import { ScreenState } from 'src/shared/enums/screenStateEnum';
import { GamePlayEventModel } from 'src/shared/models/GamePlayEvent';
import { UserModel } from 'src/shared/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public startGame: ScreenState = ScreenState.StartScreen;
  public user: UserModel;




  public startGameEmiter(startGame: ScreenState) {
    this.startGame = startGame;
  }
  public sendFormData(user: UserModel) {
    this.user = user;
    console.log(this.user);
  }
}
