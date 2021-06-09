import { CategoryService } from 'src/app/services/category.service';
import { Category } from "../models/category";
import { News } from "../models/news";
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { SeoService } from '../services/seo.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit, OnDestroy  {

  myControl = new FormControl();
  options: string[] = ['Chennai', 'Salem', 'Coimbatore'];
  public showSearchPane: boolean;
  private mediaSub: Subscription;

  constructor(
    private categoryService: CategoryService,
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    private seoService: SeoService,
    ) {}

  loginUser: any = {};
  category:Category[];
 

  ngOnInit() {
    this.getCategories();

  }
  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
  searchItems(styleDisplay: string): void {
    console.log(styleDisplay);
    if (styleDisplay === 'none') {
      this.showSearchPane = !this.showSearchPane;
    } else {
      this.doSearch();
    }
  }
  doSearch(): void {
    console.log('Do actual search');
  }
  getCategories()
  {
    this.categoryService.getCategories().subscribe(data=>{
      this.category=data;

    });
  }
  
}