import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGobiernoService {

  constructor(private conexion:HttpClient) { }

  url="https://apis.digital.gob.cl/dpa/regiones";

  getRegion(){
    return this.conexion.get(this.url);
  }

  getProvincia(codigoR: string){
      return this.conexion.get(this.url + "/" + codigoR + "/provincias")
  }

  getComuna(codigoR: string, codigoP: string){
      return this.conexion.get(this.url + "/" + codigoR + "/provincias/" + codigoP + "/comunas")
  }

}
