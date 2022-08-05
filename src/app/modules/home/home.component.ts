import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

import { BrowserModule , Title} from '@angular/platform-browser';  

import { HomeService } from "./home.service";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

    latestBlogs: any[] = [];

    constructor(
        private blogsService: HomeService,
        private titleService: Title
    ) {}

    setTitle() {
        this.titleService.setTitle('Me.U | Home Page')
    }

    getLatestBlog() {
        this.blogsService.getMediumBlogs().subscribe(b => this.latestBlogs = b.items);
    }

    ngOnInit(): void {
        this.setTitle();
        this.getLatestBlog();
    }

    truncateHTML(text: string): string {

        let charlimit = 150;
        if(!text || text.length <= charlimit )
        {
            return text;
        }
    
    
      let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
      let shortened = without_html.substring(0, charlimit) + "...";
      return shortened;
    }

}