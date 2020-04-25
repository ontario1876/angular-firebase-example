import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateModule } from './create.module';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
