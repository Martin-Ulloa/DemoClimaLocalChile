import { ApiGobiernoService } from './../api-gobierno.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comuna',
  templateUrl: './comuna.component.html',
  styleUrls: ['./comuna.component.css']
})
export class ComunaComponent implements OnInit {
  title = "Seleccionar comuna"
  comunas: any; //iterador para las comunas
  selectedC: any; //objeto comuna seleccionada a obtener de la API para emitir
  
  @Output() passComunaEvent = new EventEmitter<any>();

  @Input() urlParameterC1 ="";

  @Input() urlParameterC2 ="";

  passComuna(Comuna: any){
    this.passComunaEvent.emit(Comuna);
  }

  constructor(private service: ApiGobiernoService) { }

  ngOnChanges(): void {
      this.comunas = this.service.getComuna(this.urlParameterC1, this.urlParameterC2);
  }

  ngOnInit(): void {
  }

}
