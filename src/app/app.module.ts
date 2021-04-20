import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponentComponent } from "./components/nav-component/nav-component.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SlideshowModule } from "ng-simple-slideshow";
import { SeguradorasComponent } from './components/seguradoras/seguradoras.component';
import { ContatosComponent } from './components/contatos/contatos.component';

@NgModule({
  declarations: [AppComponent, NavComponentComponent, HomeComponent, SeguradorasComponent, ContatosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
