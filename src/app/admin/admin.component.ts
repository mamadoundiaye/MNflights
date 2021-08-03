import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

  loading = true;

  id: number = 25;
  origin: string = "nn";
  destination: string = "nnn";
  flightNumber: number= 20 ;
  depart: Date =  new Date("2019-01-16");
  arrive: Date = new Date("2019-01-16");
  nonstop: boolean = false;
  flightList: any[]=[];

  ngOnInit(): void {
   this.refresh();
 }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      id : this.id ,
      origin: this.origin,
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight);

  }

  refresh(){
    this.loading = true;
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
      this.loading = false;
    })
  }

 update(flight:Flight){
  this.flightService.updateFlight(flight).subscribe(data =>{
    console.log('data is', data);
    if(true){
      this.refresh();
    }
  });
}

delete(flight:Flight){
    if (window.confirm('are you sure you want to delete this flight? ')){
      this.flightService.deleteFlight(flight.id).subscribe(data =>{
        if(true){
          this.refresh();
        }
      });
    }
  }

}
