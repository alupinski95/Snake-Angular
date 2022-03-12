import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';
import { AppComponent } from './app.component';

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
  },
  {
    path:'**',redirectTo:''
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
