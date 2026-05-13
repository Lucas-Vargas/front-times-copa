import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelecaoCardComponent } from './selecao-card/selecao-card.component';
import { PlacarPartidaComponent } from './placar-partida/placar-partida.component';
//import { PartidaCardComponent } from './partida-card/partida-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SelecaoCardComponent,
    PlacarPartidaComponent
    //PartidaCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
