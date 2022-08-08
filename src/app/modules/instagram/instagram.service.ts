import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class InstagramService {
    urlForInstagramDetails: string = 'https://v1.nocodeapi.com/ewumesh/instagram/WSHJLvzqtYaprThW';
    urlForInstagramIndividualDetails:string = 'https://v1.nocodeapi.com/ewumesh/instagram/WSHJLvzqtYaprThW/singleFeed?id=17866250152501033';

    constructor(private http: HttpClient) {}


    getInstagramDetails():Observable<any> {
        return this.http.get<any>(this.urlForInstagramDetails);
    }

    getInstagramIndividualDetails(id:any):Observable<any> {
        let url = `this.urlForInstagramIndividualDetails + ?'id'=id`;
        return this.http.get<any>(url, id);
    }

}