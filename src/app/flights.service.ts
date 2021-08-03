import { Injectable, OnInit } from '@angular/core';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }


  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }

  postFlight(flight: Flight) {
    return this.http.post(`http://localhost:3000/flights`,flight).subscribe(data =>{
      console.log("data posted to server!")
    })
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/cities/destinations`);
  }

  deleteFlight(id: number) {

  }

}
