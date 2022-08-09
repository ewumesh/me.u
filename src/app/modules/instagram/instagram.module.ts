import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LightgalleryModule } from 'lightgallery/angular';

import { InstagramComponent } from "./instagram.component";
import { InstagramService } from "./instagram.service";

@NgModule({
    declarations: [InstagramComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        LightgalleryModule,

        RouterModule.forChild([
            {path: '', component: InstagramComponent}
        ])
    ],
    providers: [InstagramService]
})

export class InstagramModule {

}