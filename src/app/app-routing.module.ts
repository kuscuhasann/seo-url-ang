import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelamiComponent } from './selami/selami.component';

const routes: Routes = [
  { path: "sa", component:SelamiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
