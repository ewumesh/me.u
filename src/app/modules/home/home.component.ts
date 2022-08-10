import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from "@angular/forms";
import emailjs from "emailjs-com";

// Local File(s)
import { HomeService } from "src/app/modules/home/home.service";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    latestBlogs: any[] = []; // store api(s) blog lists
    quickContactForm: FormGroup | any; // define formName with typ FormGroup

    constructor(
        private blogsService: HomeService, // Custom Home Service
        private titleService: Title, // For Changing site title according to route page
        private fb: FormBuilder // For Creating Form
    ) { }

    ngOnInit(): void {
        this.initializeQuickContactForm();
        this.setTitle();
        this.getLatestBlog();
    }

    // Initialize Home page contact form
    initializeQuickContactForm() {
        let id = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        this.quickContactForm = this.fb.group({
            id: id,
            name: '',
            email: '',
            message: ''
        })
    }

    // Set this route Page Title
    setTitle() {
        this.titleService.setTitle('Me.U | Home Page')
    }

    // Get medium blogs form API(s)
    getLatestBlog() {
        this.blogsService.getMediumBlogs().subscribe(b => this.latestBlogs = b.items);
    }

    // Send mail form homepage(emailjs-com)
    submitQuickMail(e: Event) {
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