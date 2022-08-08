import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        RouterModule.forChild([
            {path: ''}
        ])
    ]
})

export class InstagramModule {

}