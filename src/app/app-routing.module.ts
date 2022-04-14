import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';
import { ScoreListComponent } from './score-list/score-list/score-list.component';
import { UserAuthorizeGuard } from 'src/shared/guards/user-authorize/user-authorize.guard';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'collect-user-data',
    component: FormComponent,
  },
  {
    path: 'gamesnake',
    component: GameComponent,
    canActivate: [UserAuthorizeGuard]
  },
  {
    path: 'score',
    component: ScoreListComponent,
    // canActivate:[UserAuthorizeGuard]
  },
  {
    path: '**', redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
