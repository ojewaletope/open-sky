import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../../services/flight.service';
import { Subscription } from 'rxjs';

class DialogData {
  data: any;
}

@Component({
  selector: 'app-flight-modal',
  templateUrl: './flight-modal.component.html',
  styleUrls: ['./flight-modal.component.scss']
})
export class FlightModalComponent implements OnInit {
  time: any[] = [];
  arrivingFlight: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private flightService: FlightService
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.time = [
      {
        id: 1,
        time: '1 day'
      },
      {
        id: 2,
        time: '2 days'
      },
      {
        id: 3,
        time: '3 days'
      },
      {
        id: 4,
        time: '4 days'
      }
    ];
  }

  getArrivalFlights(airport, start, end): Subscription {
    return this.flightService.getArrivalFlights(airport, start, end).subscribe(data => {
      this.arrivingFlight = data;
    });
  }

  getValue(value: any): any {
    const presentTimeUTC = Math.round(new Date().getTime() / 1000);
    const earlierTimeUTC = presentTimeUTC - value * 60 * 60 * 24;
    return this.getArrivalFlights(this.data.data.id, earlierTimeUTC, presentTimeUTC);
  }
}
