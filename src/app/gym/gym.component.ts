import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GymService } from '../gym.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Gym } from '../entities/gym';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {

  gym: Gym;

  constructor(private route: ActivatedRoute, private gymService: GymService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getGym(this.id);
  }

  id = +this.route.snapshot.paramMap.get("id");
  
  getGym(id: number): void {
    this.gymService.getGym(id).subscribe(gym => this.gym = gym);
  }

  sanitizeImage(image: string){
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
