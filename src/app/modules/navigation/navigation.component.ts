import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'top-nav',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.css']
})
export class NavigationComponent implements OnInit {
    constructor(private router: Router) { }

    gotoHomePage(){
        this.router.navigate(['/home']);
    }

    gotoBlogs() {
        this.router.navigate(['/blogs']);
    }

    ngOnInit() { }
}
