import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from "emailjs-com";

@Component({
    selector: 'quick-contact',
    templateUrl: './quick-contact.component.html',
    styleUrls: ['./quick-contact.scss']
})
export class QuickContactComponent implements OnInit {

    quickContactForm: FormGroup | any; // define formName with typ FormGroup

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initializeQuickContactForm();
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
}
