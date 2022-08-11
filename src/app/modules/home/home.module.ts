import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';
import { Title } from "@angular/platform-browser";
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { SwiperGalleryComponent } from "src/app/modules/home/components/swiper-gallery/swiper-gallery";
import { HomeService } from "src/app/modules/home/home.service";
import { HomeComponent } from "src/app/modules/home/home.component";
import { QuickContactComponent } from "src/app/modules/home/components/quick-contact/quick-contact.component";
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SwiperModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [],
    providers: [HomeService, Title],
    declarations: [HomeComponent,SwiperGalleryComponent,QuickContactComponent]
})

export class HomeModule {

}