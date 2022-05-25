import { FormsModule } from '@angular/forms';
import { ApiGobiernoService } from './api-gobierno.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { ComunaComponent } from './comuna/comuna.component';
import { ClimaComponent } from './clima/clima.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    ProvinciaComponent,
    ComunaComponent,
    ClimaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiGobiernoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
