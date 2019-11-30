import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mangetour',
  templateUrl: './mangetour.component.html',
  styleUrls: ['./mangetour.component.css']
})
export class MangetourComponent implements OnInit {

  constructor(private tourService: TourService, config: NgbRatingConfig) {
    config.max = 5
  }
  add = false
  notvalid = false

  ngOnInit() {
  }
  save(value) {
    this.tourService.createTour(value, isvalid => {
      if (isvalid) {
        this.add = true
      } else {
        this.notvalid = true
      }
    })
  }

}
