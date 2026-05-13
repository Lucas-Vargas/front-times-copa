import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-placar-partida',
  templateUrl: './placar-partida.component.html',
  styleUrl: './placar-partida.component.css'
})
export class PlacarPartidaComponent {
  @Input() nomeTimeA: string = '';
  @Input() nomeTimeB: string = '';

  placarA: number = 0;
  placarB: number = 0;
  somatorio: number = 0;

  JogoFinalizado: boolean = false;
  mensagemFinal: string = '';

  @Output() golsSoma = new EventEmitter<number>();

  SomaGols():void{
    this.somatorio = (this.placarA + this.placarB)
    this.golsSoma.emit(this.somatorio)
  }

  AdicionarGol(time:number): void{
    if (time === 1){
      this.placarA++
    }else if(time === 2){
      this.placarB++
    }
  }

  TerminoJogo(): void{
    this.JogoFinalizado = true
  }
  ResetarJogo(): void{
    this.JogoFinalizado = false
    this.placarA = 0
    this.placarB = 0
  }
  PlacarFinal(placarA: number, placarB: number): string{
    if (placarA > placarB){
      return `Time ${this.nomeTimeA} ganhou!`;
    }else if (placarB > placarA){
      return `Time ${this.nomeTimeB} ganhou!`;
    }else{
      return 'Empate!';
    }
  }
}
