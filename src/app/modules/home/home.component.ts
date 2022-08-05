import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// import Swiper core and required modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {

    ngOnInit(): void {
        
    }

}