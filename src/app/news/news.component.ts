import { News } from "../models/news";
import { NewsService } from "../services/news.service";
import { ActivatedRoute } from '@angular/router';
import { Photo } from "../models/photo";
  
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { style } from '@angular/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private newsService: NewsService,
    private activatedRoute:ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,

    ) { }

  news: News[];
  private mediaSub: Subscription;
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
     
      if(params["categoryId"]){
        this.getNewsForCategories(params["categoryId"])
      }else{
        this.getNewsAll()
      }
      
    });
    this.mediaSub = this.mediaObserver.asObservable().subscribe(change => {
      change.forEach((v) => {
        console.log(v.mediaQuery, v.mqAlias);
      });
      console.log('-----');
    });
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  getNewsAll() {
    this.newsService.getNewsAll().subscribe(data=>{
      this.news = data
      this.news= this.news.slice().reverse();
    })   
  }

  getNewsForCategories(categoryId:number) {
    this.newsService.getNewsForCategories(categoryId).subscribe(data=>{
      this.news = data
      this.news= this.news.slice().reverse();
    })   
  }

 
}