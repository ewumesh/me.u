import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()

export class BlogsService {

    constructor(private http: HttpClient) {}

    getMediumBlogs():Observable<any> {
        let url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ewumesh';
        return this.http.get<any>(url);
    }

}