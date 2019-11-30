import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../services/tour.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-onetour',
  templateUrl: './onetour.component.html',
  styleUrls: ['./onetour.component.css']
})
export class OnetourComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private tourService: TourService, config: NgbRatingConfig) {
    config.max = 5
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tourService.getoneTour(this.id).subscribe(data => {
      this.tour = data as any
    })
  }
  tour = {}
  id


}
