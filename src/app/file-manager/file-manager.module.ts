import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { TreeviewModule } from 'ngx-treeview';

import { LocalFileComponent, DriveFileComponent, FileManagerComponent, GoogleFileComponent } from '.';
import { GoogleService } from './services/google.service';
import { AuthService } from './services/auth.service';



import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { FileDropModule } from 'ngx-file-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "810456948480-jolec51rpg3bpdld5lkgjf6k884i9lhp.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets.readonly"
  ].join(" ")
};

@NgModule({
  declarations: [
    LocalFileComponent,
    DriveFileComponent,
    FileManagerComponent,
    GoogleFileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileDropModule,
    TreeviewModule.forRoot(),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
    PerfectScrollbarModule
  ],
  providers: [
    GoogleService,
    AuthService,
  ]
})
export class FileManagerModule { }
