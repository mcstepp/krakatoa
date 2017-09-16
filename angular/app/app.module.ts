import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes, appRoutingProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ForumDirectoryComponent } from './forum-directory/forum-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumDirectoryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    appRoutes
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
