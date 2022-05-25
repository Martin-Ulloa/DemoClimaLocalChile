import { ApiGobiernoService } from './../api-gobierno.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {
  title = "Seleccionar provincia"
  provincias: any; //iterador para las provincias
  selectedP!: string; //provincia seleccionada para emitir
 //provincia seleccionada para emitir
  
  @Output() passProvinciaEvent = new EventEmitter<string>();

  @Input() urlParameterP ="";

  passProvincia(codigoRegion: string){
    this.passProvinciaEvent.emit(codigoRegion);
  }

  constructor(private service: ApiGobiernoService) {}

  ngOnChanges(): void {
      this.provincias = this.service.getProvincia(this.urlParameterP);
  }

  ngOnInit(): void {
  }

}
