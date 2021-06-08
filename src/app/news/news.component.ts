import { News } from "../models/news";
import { NewsService } from "../services/news.service";
import { ActivatedRoute } from '@angular/router';
import { Photo } from "../models/photo";
  
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { style } from '@angular/animations';
import { SeoService } from "../services/seo.service";

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
    private seoService:SeoService,
   

    ) { }

  news: News[];
  private mediaSub: Subscription;
  
  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
     this.seoService.updateTitle('Oldumu')
      if(params["categoryId"]){
        this.getNewsForCategories(params["categoryId"])
      }else{
        this.getNewsAll()
      }
      
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