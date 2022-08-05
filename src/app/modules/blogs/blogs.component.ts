import { Component, OnInit } from "@angular/core";
import { BlogsService } from "./blogs.service";


@Component({
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.css']
})

export class BlogsComponent implements OnInit {


    constructor(private blogsService: BlogsService) {}

    ngOnInit() {

        this.blogsService.getMediumBlogs().subscribe(b => console.log(b, "MEDIUM BLOGS.."))
        
    }
    
}