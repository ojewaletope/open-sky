import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../../services/flight.service';
import { Subscription } from 'rxjs';
import {ResponseInterface} from '../../model/response-interface';

class DialogData {
  data: any;
}

interface Time {
  id: number;
  time: string;
}
@Component({
  selector: 'app-flight-modal',
  templateUrl: './flight-modal.component.html',
  styleUrls: ['./flight-modal.component.scss']
})
export class FlightModalComponent implements OnInit {
  time: Time[];
  flights: ResponseInterface[] = [];
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
    return this.flightService
      .getArrivalFlights(airport, start, end)
      .subscribe(data => {
        this.flights = data;
      });
  }

  getValue(value: any): any {
    const presentTimeUTC = Math.round(new Date().getTime() / 1000);
    const earlierTimeUTC = presentTimeUTC - value * 60 * 60 * 24;
    return this.getArrivalFlights(
      this.data.data.id,
      earlierTimeUTC,
      presentTimeUTC
    );
  }

  parseDate(value): string {
    return new Date(value * 1000).toUTCString();
  }
  getDepartureFlights(airport, start, end): Subscription {
    return this.flightService
      .getDepartureFlights(airport, start, end)
      .subscribe(data => {
        this.flights = data;
      });
  }
  getDepartureValue(value: any): any {
    const presentTimeUTC = Math.round(new Date().getTime() / 1000);
    const earlierTimeUTC = presentTimeUTC - value * 60 * 60 * 24;
    return this.getDepartureFlights(
      this.data.data.id,
      earlierTimeUTC,
      presentTimeUTC
    );
  }
}
