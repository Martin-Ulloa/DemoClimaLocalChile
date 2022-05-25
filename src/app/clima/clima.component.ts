import { ApiClimaService } from './../api-clima.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  title = "Información de la comuna"
  climas: Observable<any> | undefined;

  @Input() latitud = ""

  @Input() longitud = ""

  @Input() nombre = ""

  constructor(private service:  ApiClimaService) { }

  ngOnChanges(): void {
    this.climas = this.service.getClima(this.latitud, this.longitud);
  }

  ngOnInit(): void {

  }

}
