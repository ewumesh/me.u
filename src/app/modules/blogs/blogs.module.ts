import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { BlogsComponent } from "./blogs.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([
            {path: '', component: BlogsComponent}
        ])
    ],
    declarations: [BlogsComponent],
    providers: [],
    exports: []
})

export class BlogsModule {

}

// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ewumesh