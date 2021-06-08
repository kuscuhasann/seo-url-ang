import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-selami',
  templateUrl: './selami.component.html',
  styleUrls: ['./selami.component.css']
})
export class SelamiComponent implements OnInit {

  constructor(private seoService:SeoService) { }

  ngOnInit() {
    this.seoService.updateTitle("Calisma")
  }

}
