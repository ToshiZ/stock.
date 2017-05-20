import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';

@Injectable()
export class UrlService {
    public addTaskOptions: String;
    constructor() {
         let prod: boolean = environment.production;
         if (prod) {
            this.addTaskOptions = '/addTaskOptions';
         } else {
            this.addTaskOptions = '/addTaskOptions';
         }
     };
}