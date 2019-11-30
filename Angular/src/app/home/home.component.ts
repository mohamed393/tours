import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tourService: TourService, config: NgbRatingConfig) {
    config.max = 5

  }

  ngOnInit() {
    this.tourService.getAllTours().subscribe(data => {
     this.filteredTours= this.tours = data as any
    }
    )
  }
  tours = []
  filteredTours=[]
  filter(query) {
    this.filteredTours = query ?
      this.tours.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : this.tours
  }


}
