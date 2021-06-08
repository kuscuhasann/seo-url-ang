import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: "news", component: NewsComponent },
  { path: "newsDetail/:newsId/:title", component: NewsDetailComponent },
  { path: "**", redirectTo: "news", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
