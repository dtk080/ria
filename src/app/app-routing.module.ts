import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent, NotFoundErrorPageComponent } from './shared';
import { LAYOUT_CHILD_ROUTES } from './shared/routes';

export const appRoutes: Routes = [
    { path: '', component: LayoutComponent, children: LAYOUT_CHILD_ROUTES },
    { path: '**', component: NotFoundErrorPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}