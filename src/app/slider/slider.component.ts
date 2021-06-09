import { Component, Input, OnInit } from '@angular/core';
import { News } from "../models/news";
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(
    private newsService: NewsService,
  ) { }
  @Input() deviceXs:boolean;
  news: News[];
  slideConfig={"slidesToShow": 1, "slidesToScroll": 1,
  "autoplay":true,"autoplaySpeed":5000,}

  ngOnInit() {
    this.getNewsAll()
  }
  getNewsAll() {
    this.newsService.getNewsAll().subscribe(data=>{
      this.news = data
      this.news= this.news.slice().reverse();

    })
  }

}