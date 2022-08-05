import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from "./home.service";
import { Title } from "@angular/platform-browser";
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SwiperModule,
        MatCardModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [],
    providers: [HomeService, Title],
    declarations: [HomeComponent]
})

export class HomeModule {

}