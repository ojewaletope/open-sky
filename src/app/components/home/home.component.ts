import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FlightModalComponent } from '../flight-modal/flight-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Cities {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities: Cities[] = [];
  constructor(public dialog: MatDialog, private http: HttpClient) {}
  url = `https://opensky-network.org/api`;
  ngOnInit(): void {
    this.cities = [
      {
        id: 'EGLL',
        name: 'London'
      },
      {
        id: 'RJTT',
        name: 'New York'
      },
      {
        id: 'RJTT',
        name: 'Tokyo'
      },
      {
        id: 'ZSPD',
        name: 'Shanghai'
      },
      {
        id: 'KLAX',
        name: 'Los Angeles'
      },
      {
        id: 'EHAM',
        name: 'Amsterdam'
      },
      {
        id: 'KATL',
        name: 'Atlanta'
      },
      {
        id: 'LFPG',
        name: 'Paris'
      },
      {
        id: 'ZBAA',
        name: 'Beijing'
      },
      {
        id: 'OMDB',
        name: 'Dubai'
      }
    ];
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(FlightModalComponent, {
      width: '1200px',
      height: 'auto',
      data: { data }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
  getFlightDetails(city: any): void {
    return this.openDialog(city);
  }
}
