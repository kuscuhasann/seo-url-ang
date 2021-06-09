import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxGalleryModule } from 'ngx-gallery-9';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { MaterialModule } from './core/material.module';



@NgModule({
  declarations: [		
    AppComponent,
      NewsComponent,
      NewsDetailComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
