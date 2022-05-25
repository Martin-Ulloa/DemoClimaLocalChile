import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='prueba';
  selectedRegion = "";
  selectedProvincia ="";
  selectedComuna ="";
  latitudComuna ="";
  longitudComuna ="";

  receiveRegion(codigoRegion: string): void {
    this.selectedRegion = codigoRegion;
    this.selectedProvincia="";
    this.selectedComuna ="";
    this.latitudComuna = "";
    this.longitudComuna = "";
  }

  receiveProvincia(codigoProvincia: string): void {
    this.selectedProvincia = codigoProvincia
    this.selectedComuna ="";
    this.latitudComuna = "";
    this.longitudComuna = "";
  }

  receiveComuna(Comuna: any): void {
    this.selectedComuna = Comuna.nombre;
    this.latitudComuna = Comuna.lat;
    this.longitudComuna = Comuna.lng;
  }

}


