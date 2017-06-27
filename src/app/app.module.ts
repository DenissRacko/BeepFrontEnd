import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import * as globalVars from './global';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
