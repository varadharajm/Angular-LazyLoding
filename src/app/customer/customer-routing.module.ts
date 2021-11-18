import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { GoodDataComponent } from './good-data/good-data.component';

const routes: Routes = [
  { path:'', component: DataComponent},
  { path: 'good', component:GoodDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
