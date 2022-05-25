import { ApiGobiernoService } from './../api-gobierno.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  title = "Seleccionar región de Chile"
  regiones: any;
  selectedR: any;

  @Output() passRegionEvent = new EventEmitter<string>();
  
  passRegion(codigoRegion: string){
    this.passRegionEvent.emit(codigoRegion);
  }

  constructor(private service: ApiGobiernoService) {}
  
  ngOnInit(): void {
    this.regiones = this.service.getRegion();
  }

}
