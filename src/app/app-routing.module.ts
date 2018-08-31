import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AddRouteComponent } from './add-route/add-route.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'addroute', component: AddRouteComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule
  ]
})

export class AppRoutingModule { }
