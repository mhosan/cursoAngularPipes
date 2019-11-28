import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LOCALE_ID} from '@angular/core';                //<-------para la fecha en castellano
import localeEs from '@angular/common/locales/es';      //<-------para la fecha en castellano
import { registerLocaleData } from '@angular/common';   //<-------para la fecha en castellano
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

registerLocaleData(localeEs);                           //<-------para la fecha en castellano

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}                //<-------para la fecha en castellano
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
