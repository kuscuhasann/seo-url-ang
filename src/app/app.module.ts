import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxGalleryModule } from 'ngx-gallery-9';

import { MaterialModule } from './core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { UrlformatPipe } from './pipes/urlformat.pipe';
import { DownNavComponent } from './down-nav/down-nav.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SeoService } from './services/seo.service';

@NgModule({
  declarations: [							
    AppComponent,
      NewsComponent,
      NewsDetailComponent,
      NavComponent,
      UrlformatPipe,
      DownNavComponent,
      PrivacyPolicyComponent,
      SliderComponent,
      NewsDetailComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'deneme' }),
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,
    MaterialModule,
    FlexLayoutModule,
    SlickCarouselModule,
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
