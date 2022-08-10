import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
    selector: 'swiper-gallery',
    templateUrl: './swiper-gallery.html',
    styleUrls: ['./swiper-gallery.css','./swiper-gallery.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SwiperGalleryComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
