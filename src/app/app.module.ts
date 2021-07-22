//librerias Externas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { AppComponent } from './app.component';

//modulos
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, ɵBrowserAnimationBuilder } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import {MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule} from '@angular/material/button'
import {MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingPageComponent } from './landing-page/landing-page.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
