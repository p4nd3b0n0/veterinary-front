import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormregisterComponent } from './components/formregister/formregister.component';
import { APP_ROUTING } from './app.routes';
import { FormbuttonsComponent } from './components/formbuttons/formbuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormregisterComponent,
    FormbuttonsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
