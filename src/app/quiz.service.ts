




/*
  get(url: string) {
    return this.http.get('data/angular.json');
  }

 getAll() {
    return [
      { id: 'data/angular.json', name: 'javaScript' },
      
    
  } 
]
 }
}*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json'; //because of this file upload nhi ho rha tha or file ko assest me daalna hoga

  //getConfig() {
   // return this.http.get(this.configUrl);
 // }
  get(url: string) {
    return this.http.get('assets/config.json');
 }

  getAll() {
   return [
    { id: 'assets/config.json', name: 'angular' },

    ];
  }

}