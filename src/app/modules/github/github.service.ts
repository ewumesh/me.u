import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";

@Injectable()

export class GithubService {

    urlForGithubProfile: string = 'https://v1.nocodeapi.com/ewumesh/github/jvrhZyIETFLfDGIU';
    urlforGithubRepositories: string = 'https://v1.nocodeapi.com/ewumesh/github/jvrhZyIETFLfDGIU/repos'

    constructor(private http: HttpClient) {}

    getGithubProfile():Observable<any> {
        return this.http.get<any>(this.urlForGithubProfile);
    }

    getGithubRepositories():Observable<any> {
        return this.http.get<any>(this.urlforGithubRepositories);
    }

}