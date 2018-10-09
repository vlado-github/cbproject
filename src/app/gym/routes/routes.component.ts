import { Component, OnInit } from '@angular/core';
import { ClimbingRoute } from '../../entities/climbingRoute'
import { RouteService } from '../../route.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes: ClimbingRoute[];

  constructor(private routeService: RouteService, private route: ActivatedRoute) { }

  id = +this.route.snapshot.paramMap.get("id");
  ngOnInit() {
    this.getRoutes(this.id);
  }

  getRoutes(id: number): void {
    this.routeService.getRoutes(id).subscribe(routes => this.routes = routes);
  }

}
