import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent, HeaderComponent, FooterComponent, NotFoundErrorPageComponent } from '.';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundErrorPageComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule
    ],
    providers: []
})
export class SharedModule { }
