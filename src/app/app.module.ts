import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './auth/create/create.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OfficialgovComponent } from './shared/officialgov/officialgov.component';
import { NavComponent } from './shared/nav/nav.component';
import { TermsComponent } from './refs/terms/terms.component';
import { PrivacyComponent } from './refs/privacy/privacy.component';
import { CookiesComponent } from './refs/cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    OfficialgovComponent,
    NavComponent,
    TermsComponent,
    PrivacyComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
