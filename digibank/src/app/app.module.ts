import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "./../pages/login/login";
import { AppService } from "./app.services";
import { HttpClientService } from "../shared/http/base.http.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { Broadcaster } from "../service/broadcaster";
import { LogoutPage } from "../pages/logout/logout";
import { IntroSliderPage } from "../pages/intro-slider/intro-slider";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [MyApp, HomePage, LoginPage, LogoutPage, IntroSliderPage],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, LogoutPage, IntroSliderPage],
  providers: [
    Broadcaster,
    HttpClientService,
    AppService,
    EmailComposer,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
