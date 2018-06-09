import { Routes } from "@angular/router";
import { FileManagerComponent } from "../file-manager";

export const LAYOUT_CHILD_ROUTES: Routes = [
    { path: '', redirectTo: '/filemanager', pathMatch: 'full' },
    { path: 'filemanager', component: FileManagerComponent }
]