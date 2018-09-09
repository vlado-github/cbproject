import { Component, OnInit } from '@angular/core';
import { GymService } from '../../gym.service';


@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {

  gyms: {id: number, name: string, city: string, countyr: string, photo: Blob}[];

  constructor(private gymService: GymService) { }

 

  ngOnInit() {
    this.getGyms();
  }

  getGyms(): void {
    this.gymService.getGyms().subscribe(gyms => this.gyms = gyms);
  }

}
