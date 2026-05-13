import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selecao-card',
  templateUrl: './selecao-card.component.html',
  styleUrls: ['./selecao-card.component.css']
})
export class SelecaoCardComponent {
  // Entradas de dados que virão do componente Pai (AppComponent)
  @Input() nome: string = '';
  @Input() bandeira: string = '';

  // Saída de dados: avisa o Pai que algo aconteceu aqui
  @Output() golMarcado = new EventEmitter<number>();

  gols: number = 0;
  gritoDeGuerra: string = 'VAI QUE É TUA!'; // Usado no Two-Way Data Binding

  adicionarGol(): void {
    this.gols++;
    // Emite o evento enviando o novo número de gols para quem estiver escutando
    this.golMarcado.emit(this.gols);
  }
}
