import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
    imports: [
        CommonModule,
        SwiperModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [],
    declarations: [HomeComponent]
})

export class HomeModule {

}