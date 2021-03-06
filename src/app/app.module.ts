import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MdButtonModule, 
         MdCheckboxModule, 
         MdInputModule, 
         MdSelectModule, 
         MdSidenavModule, 
         MdDatepickerModule, 
         MdNativeDateModule, 
         MdTooltipModule,
         MdCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { BeepsComponent } from './beeps/beeps.component';
import { maxValue } from './classes/max-number.validator';
import { minValue } from './classes/min-value.validator';

import * as globalVars from './global';
import { BeepFormComponent } from './beep-form/beep-form.component';
import { BeepInlineComponent } from './beep-inline/beep-inline.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'beeps', component: BeepsComponent },
  { path: 'createBeep', component: BeepFormComponent },
  { path: 'editBeep/:id', component: BeepFormComponent },
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    BeepsComponent,
    BeepFormComponent,
    maxValue,
    minValue,
    BeepInlineComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSidenavModule, MdDatepickerModule, MdNativeDateModule, MdTooltipModule, MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
