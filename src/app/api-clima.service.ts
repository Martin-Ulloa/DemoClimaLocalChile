import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClimaService {

  constructor(private conexion:HttpClient) { }

  url="https://api.openweathermap.org/data/2.5/forecast";

  api_key="b4d4a54bc3d7a5ef67c99692a71176a6";

  getClima(latitud: string, longitud: string){
    return this.conexion.get(this.url + "?lat=" + latitud + "&lon=" + longitud + "&cnt=4&lang=es&appid=" + this.api_key + "&units=metric");
  }
}
