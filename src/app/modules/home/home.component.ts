import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

import { Title} from '@angular/platform-browser';  

import { HomeService } from "./home.service";
import { FormBuilder, FormGroup } from "@angular/forms";

import emailjs from "emailjs-com";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {

    latestBlogs: any[] = [];
    quickContactForm: FormGroup | any;

    constructor(
        private blogsService: HomeService,
        private titleService: Title,
        private fb: FormBuilder
    ) {
        this.initializeQuickContactForm();
    }

    submitQuickMail(e: Event) {
        console.log(this.quickContactForm.value, "SUbmmitttt..");

        emailjs
        .sendForm(
          "service_lt27foo",
          "template_7wvmke5",
          e.target as HTMLFormElement,
          "user_WAA5MhhxsmX2iE3rzyZpO"
        ).then(response => {
            console.log(response, "RESPONSE..")
        })
    }

    initializeQuickContactForm() {
        let id = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        this.quickContactForm = this.fb.group({
            id: id,
            name:'',
            email:'',
            message: ''
        })
    }

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