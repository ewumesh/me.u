import { Component, OnInit } from "@angular/core";
import { GithubService } from "./github.service";

@Component({
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {

    githubProfileDetails: any = {};
    githubRepositories:any[] = [];

    constructor(private githubService: GithubService) {}

    getGithubProfileDetails() {
        this.githubService.getGithubProfile().subscribe(profile => {
            this.githubProfileDetails = profile;
        })
    }

    getGithubRepositories() {
        this.githubService.getGithubRepositories().pipe().subscribe(repo => {
            this.githubRepositories = repo;
        })
    }
    //IGQVJXcEhpWF91ZAVpyMG1RRTlZAWUZAXX3pNQUV3aWFTeHpGc2pNaDI5WXFvMjRlRjQyUE5KbjRkTkl0U3VWWm5ENmM2dXhFblkyZA2FEYzM4MFpRY0xxM09tYTFLR1h0UGRZANDlRM3RKczJJdEMtT2owRQZDZD

    ngOnInit() {
        this.getGithubProfileDetails();
    }

}