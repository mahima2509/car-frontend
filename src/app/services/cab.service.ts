import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from '../model/cab.model';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http: HttpClient) { }

  // Update the base URL for Cab API
  baseURL: string = 'http://localhost:8181/api/cabs'; // Ensure the URL matches your backend API

  getAll(): Observable<Cab[]> {
    return this.http.get<Cab[]>(`${this.baseURL}/getall`); // Get all cabs
  }

  insert(body: Cab): Observable<Cab> {
    console.log(body);
    return this.http.post<Cab>(`${this.baseURL}/add`, body); // Add a new cab
  }

  update(body: Cab): Observable<Cab> {
    console.log(body);
    return this.http.put<Cab>(`${this.baseURL}/update/driver-by-cab`, body); // Update an existing cab
  }

  delete(cabId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseURL}/deletebyid/${cabId}`); // Delete cab by ID
  }

  find(cabId: number): Observable<Cab> {
    console.log("service " + cabId);
    return this.http.get<Cab>(`${this.baseURL}/getbyid/${cabId}`); // Find cab by ID
  }
}
