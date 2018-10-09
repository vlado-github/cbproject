import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AddRouteComponent } from './add-route/add-route.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GymComponent } from './gym/gym.component'

const routes: Routes = [
  { path: 'addroute', component: AddRouteComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'gym/:id', component: GymComponent},
  { path: 'route/:id', component: GymComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
