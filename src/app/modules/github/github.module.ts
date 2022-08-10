import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { GithubComponent } from "src/app/modules/github/github.component";
import { GithubService } from "src/app/modules/github/github.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([
            {path: '', component: GithubComponent}
        ])
    ],
    declarations: [GithubComponent],
    exports: [],
    providers: [GithubService]
})

export class GithubModule {

}