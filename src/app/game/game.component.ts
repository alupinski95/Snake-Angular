import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { GameAction } from 'src/shared/enums/gameActionsEnum';
import { ScreenState } from 'src/shared/enums/screenStateEnum';
import { GamePlayEventModel } from 'src/shared/models/GamePlayEvent';
import { UserModel } from 'src/shared/models/User';
import { interval, Subscription, timer } from 'rxjs';
import { GameState } from 'src/shared/enums/gameStateEnum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public bw: boolean = false;
  public boardSize: number = 15;
  public score: number = 0;
  public playGameHistory: Array<GamePlayEventModel> = [];
  public time: number = 0;
  public timeCounter: number = 0;
  public gameState: GameState = GameState.NotStarted;
  public isStarted: boolean = false;
  public gameStateArray: Array<any>;
  @Input() userData: UserModel;
  @ViewChild('game') private snake: NgxSnakeComponent;
  @Output() exitGame = new EventEmitter<ScreenState>();


  constructor() {
    this.gameStateArray = Object.entries(GameState)
      .map(([key, value]) => ({ key, value }));
  }



  public interval: any;

  public onGrow() {
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionGrow, this.time));
    this.score += 10;
  }

  public onGameOver() {
    this.gameState = GameState.Ended;
    this.isStarted = false;
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionGameOver, this.time));
    alert('game over');
  }

  public exitGameHandler() {
    this.score = 0;
    this.playGameHistory = [];
    this.interval = null;
    this.exitGame.emit(ScreenState.StartScreen);
  }

  public startGameHandler() {
    if (this.gameState == GameState.Ended) return;
    this.gameState = GameState.Started;
    this.isStarted = true;
    this.startTimer();
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionStart + this.score.toString(), this.time));
    this.snake.actionStart()

  }
  public stopGameHandler() {
    this.isStarted = false;
    this.gameState = GameState.Paused;
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionStop, this.time));
    clearInterval(this.interval);
    this.snake.actionStop()

  }
  public resetGameHandler() {
    this.time = 0;
    this.score = 0;
    this.playGameHistory = [];
    this.snake.actionReset();

  }
  public goUpHandler() {
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionUp, this.time));
    this.snake.actionUp()
  }
  public goRightHandler() {
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionRight, this.time));
    this.snake.actionRight()

  }
  public goLeftHandler() {
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionLeft, this.time));
    this.snake.actionLeft()

  }
  public goDownHandler() {
    this.playGameHistory.push(new GamePlayEventModel(GameAction.ActionDown, this.time));
    this.snake.actionDown()

  }

  public startTimer() {
    this.interval = setInterval(() => {
      if (this.gameState == GameState.Ended) {
        this.time = 0;
        this.time = this.time + 1;
      } else {
        this.time = this.time + 1;
      }
    }, 100);
  }
}
