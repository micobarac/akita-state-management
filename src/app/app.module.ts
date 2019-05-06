import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowIfLoggedInDirective } from './auth/show-if-logged-in.directive';
import { ShowIfLoginDirective } from './auth/show-if-login.directive';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, ShowIfLoginDirective, ShowIfLoggedInDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
