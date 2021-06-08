import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "../models/news";
import { Photo } from "../models/photo";

import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

constructor(private httpClient: HttpClient,
  private router:Router) { }

  path = "https://api.funadres.com/api/news/";
  //path = "https://api.funadres.com/api/news/";
  //path = "https://localhost:44322/api/news/";

getNewsAll(): Observable<News[]> {
  return this.httpClient.get<News[]>(this.path);
}
getNewsForCategories(categoryId): Observable<News[]> {
  return this.httpClient.get<News[]>(this.path+"getbycategory/?categoryId="+categoryId);
}
getNewsById(newsId):Observable<News>{
  return this.httpClient.get<News>(this.path+"detail/?id="+newsId)
}

getPhotosByNews(newsId):Observable<Photo[]>{
  return this.httpClient.get<Photo[]>(this.path + "photos/?newsId="+newsId);
}
}
