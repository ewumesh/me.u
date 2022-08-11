import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from '@angular/platform-browser';

// Local File(s)
import { HomeService } from "src/app/modules/home/home.service";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    latestBlogs: any[] = []; // store api(s) blog lists

    constructor(
        private blogsService: HomeService, // Custom Home Service
        private titleService: Title // For Changing site title according to route page
    ) { }

    ngOnInit(): void {
        this.setTitle();
        this.getLatestBlog();
    }

    // Set this route Page Title
    setTitle() {
        this.titleService.setTitle('Me.U | Home Page')
    }

    // Get medium blogs form API(s)
    getLatestBlog() {
        this.blogsService.getMediumBlogs().subscribe(b => this.latestBlogs = b.items);
    }

    // Truncate innerhtml string
    truncateHTML(text: string): string {

        let charlimit = 150;
        if (!text || text.length <= charlimit) {
            return text;
        }

        let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
        let shortened = without_html.substring(0, charlimit) + "...";
        return shortened;
    }

}