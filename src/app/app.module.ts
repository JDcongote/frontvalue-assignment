import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { JokesModule } from './modules/+jokes/jokes.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    JokesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
