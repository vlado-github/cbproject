import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AddRouteComponent } from './add-route/add-route.component';

const routes: Routes = [
  { path: 'addroute', component: AddRouteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule
  ]
})

export class AppRoutingModule { }
