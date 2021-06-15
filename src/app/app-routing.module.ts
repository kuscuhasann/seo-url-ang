import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { NewsComponent } from './news/news.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: "news", component: NewsComponent },
  { path: "news/:newsId/:title", component: NewsDetailComponent },
  { path: "news/category/:categoryId/:categoryName", component:NewsComponent},
  { path: "gizlilik-politikasi", component:PrivacyPolicyComponent},
  { path: "**", redirectTo: "news", pathMatch: "full" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
