import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { BlogsComponent } from "src/app/modules/blogs/blogs.component";
import { BlogsService } from "src/app/modules/blogs/blogs.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([
            {path: '', component: BlogsComponent}
        ])
    ],
    declarations: [BlogsComponent],
    providers: [BlogsService],
    exports: []
})

export class BlogsModule {

}

// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ewumesh