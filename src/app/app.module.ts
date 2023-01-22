import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddbarComponent } from './addbar/addbar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AddbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, // material import
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // kan ook het volgende moeten worden: class AppModule { }
