import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { JokesModule } from './modules/+jokes/jokes.module';
import { FavoritesModule } from './modules/+favorites/favorites.module';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavSidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    JokesModule,
    FavoritesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
