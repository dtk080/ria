import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalFileComponent, DriveFileComponent, FileManagerComponent, GoogleFileComponent } from '.';

@NgModule({
  declarations: [
    LocalFileComponent,
    DriveFileComponent,
    FileManagerComponent,
    GoogleFileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class FileManagerModule { }
