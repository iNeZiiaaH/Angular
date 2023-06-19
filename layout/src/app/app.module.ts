import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LogoComponentComponent } from './header-component/logo-component/logo-component.component';
import { NavigationComponentComponent } from './header-component/navigation-component/navigation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainComponentComponent,
    FooterComponentComponent,
    LogoComponentComponent,
    NavigationComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
