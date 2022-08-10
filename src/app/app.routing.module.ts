
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('src/app/modules/home/home.module'). then(r => r.HomeModule)},
	{path: 'blogs', loadChildren: () => import('src/app/modules/blogs/blogs.module'). then(r => r.BlogsModule)},
	{path: '404', loadChildren: () => import('src/app/modules/shared/404/404.module').then(m => m.NotFoundModule)},
	{path: 'github', loadChildren: () => import('src/app/modules/github/github.module').then(m => m.GithubModule)},
	{path: 'instagram', loadChildren: () => import('src/app/modules/instagram/instagram.module').then(m => m.InstagramModule)},
	{ path: '**', redirectTo: 'home' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }