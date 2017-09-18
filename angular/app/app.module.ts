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
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule
} from '@angular/material';

import {
    CovalentLayoutModule,
    CovalentStepsModule
    /*, any other modules */
} from '@covalent/core';


import { AppComponent } from './app.component';
import { ForumDirectoryComponent } from './forum-directory/forum-directory.component';
import { ForumDirectoryService } from './forum-directory/forum-directory.service';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ThreadViewComponent } from './thread-view/thread-view.component';
import { ForumComponent } from './forum/forum.component';
import { ForumMenuComponent } from './forum-menu/forum-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumDirectoryComponent,
    ForumViewComponent,
    ThreadViewComponent,
    ForumComponent,
    ForumMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    appRoutes
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [
      appRoutingProviders,
      ForumDirectoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
