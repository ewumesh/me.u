
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('./modules/home/home.module'). then(r => r.HomeModule)},
	{ path: '**', redirectTo: '404' },
	{path: '404', loadChildren: () => import('./modules/shared/404/404.module').then(m => m.NotFoundModule)},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }