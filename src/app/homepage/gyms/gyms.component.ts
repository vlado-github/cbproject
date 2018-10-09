import { Component, OnInit } from '@angular/core';
import { GymService } from '../../gym.service';
import { Gym } from '../../entities/gym';


@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {

  gyms: Gym[];

  constructor(private gymService: GymService) { }

  ngOnInit() {
    this.getGyms();
  }

  getGyms(): void {
    this.gymService.getGyms().subscribe(gyms => this.gyms = gyms);
  }

}
