import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { InstagramService } from "./instagram.service";

@Component({
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.css', 'instagram.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class InstagramComponent implements OnInit {
    instagramDetails: {} = {};

    posts:any[] = [];

    settings = {
        counter: false,
        plugins: [lgZoom]
      };

      constructor(private instagramService: InstagramService) {}

      onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
      };

      ngOnInit() {
        this.getInstagramDetails();
      }

      getInstagramDetails() {
        this.instagramService.getInstagramDetails().subscribe(profile => {
            this.posts = profile.data;
            console.log(this.posts, 'PROFILE...')
        })
      }

    //   getInstagramFeed() 
    
}