import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FormComponent } from './form/form.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FormsModule } from '@angular/forms';
import { MoveListComponent } from './move-list/move-list.component';

import { OrderByPipe } from 'src/shared/pipes/OrderByPipe/order-by.pipe';
import { FilterByTypePipe } from 'src/shared/pipes/FilterByTypePipe/filter-by-type.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ScoreChrumService } from 'src/shared/services/scoreservice/score-chrum.service';
import { UserdataService } from 'src/shared/services/userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { ScoreListComponent } from './score-list/score-list/score-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FilterByUnicodePipe } from '../shared/pipes/FilterByUnicode/filter-by-unicode.pipe';
@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        FormComponent,
        StartPageComponent,
        MoveListComponent,
        FilterByTypePipe,
        OrderByPipe,
        ScoreListComponent,
        SpinnerComponent,
        MenuComponent,
        MainViewComponent,
        FilterByUnicodePipe
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [ScoreChrumService, UserdataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
