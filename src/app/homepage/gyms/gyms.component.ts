import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../route.service';


@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {

  gyms: {id: number, name: string, city: string, countyr: string, photo: Blob}[];

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.getGyms();
  }

  getGyms(): void {
    this.routeService.getGyms().subscribe(gyms => this.gyms = gyms);
  }

}
