import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { FileManagerModule } from './file-manager/file-manager.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        SharedModule,
        FileManagerModule,
        NgbModule.forRoot(),
        PerfectScrollbarModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
