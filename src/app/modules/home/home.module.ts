import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from "./home.service";
import { Title } from "@angular/platform-browser";
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SwiperGalleryComponent } from "./components/swiper-gallery";

@NgModule({
    imports: [
        CommonModule,
        // BrowserAnimationsModule,
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
    declarations: [HomeComponent,SwiperGalleryComponent]
})

export class HomeModule {

}