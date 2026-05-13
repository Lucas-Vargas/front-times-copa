import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 titulo = 'Dashboard da Copa';
  totalGolsRodada: number = 0;

  // Nossa base de dados simulada
  listaSelecoes = [
    { pais: 'Alemanha', flag: 'https://flagcdn.com/w320/de.png' },
    { pais: 'Argélia', flag: 'https://flagcdn.com/w320/dz.png' },
    { pais: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { pais: 'Arábia Saudita', flag: 'https://flagcdn.com/w320/sa.png' },
    { pais: 'Austrália', flag: 'https://flagcdn.com/w320/au.png' },
    { pais: 'África do Sul', flag: 'https://flagcdn.com/w320/za.png' },
    { pais: 'Áustria', flag: 'https://flagcdn.com/w320/at.png' },
    { pais: 'Bélgica', flag: 'https://flagcdn.com/w320/be.png' },
    { pais: 'Bósnia e Herzegovina', flag: 'https://flagcdn.com/w320/ba.png' },
    { pais: 'Brasil', flag: 'https://flagcdn.com/w320/br.png' },
    { pais: 'Cabo Verde', flag: 'https://flagcdn.com/w320/cv.png' },
    { pais: 'Canadá', flag: 'https://flagcdn.com/w320/ca.png' },
    { pais: 'Colômbia', flag: 'https://flagcdn.com/w320/co.png' },
    { pais: 'Coreia do Sul', flag: 'https://flagcdn.com/w320/kr.png' },
    { pais: 'Costa do Marfim', flag: 'https://flagcdn.com/w320/ci.png' },
    { pais: 'Croácia', flag: 'https://flagcdn.com/w320/hr.png' },
    { pais: 'Curaçao', flag: 'https://flagcdn.com/w320/cw.png' },
    { pais: 'Egito', flag: 'https://flagcdn.com/w320/eg.png' },
    { pais: 'Equador', flag: 'https://flagcdn.com/w320/ec.png' },
    { pais: 'Escócia', flag: 'https://flagcdn.com/w320/gb-sct.png' },
    { pais: 'Espanha', flag: 'https://flagcdn.com/w320/es.png' },
    { pais: 'Estados Unidos', flag: 'https://flagcdn.com/w320/us.png' },
    { pais: 'França', flag: 'https://flagcdn.com/w320/fr.png' },
    { pais: 'Gana', flag: 'https://flagcdn.com/w320/gh.png' },
    { pais: 'Haiti', flag: 'https://flagcdn.com/w320/ht.png' },
    { pais: 'Holanda', flag: 'https://flagcdn.com/w320/nl.png' },
    { pais: 'Inglaterra', flag: 'https://flagcdn.com/w320/gb-eng.png' },
    { pais: 'Irã', flag: 'https://flagcdn.com/w320/ir.png' },
    { pais: 'Iraque', flag: 'https://flagcdn.com/w320/iq.png' },
    { pais: 'Japão', flag: 'https://flagcdn.com/w320/jp.png' },
    { pais: 'Jordânia', flag: 'https://flagcdn.com/w320/jo.png' },
    { pais: 'Marrocos', flag: 'https://flagcdn.com/w320/ma.png' },
    { pais: 'México', flag: 'https://flagcdn.com/w320/mx.png' },
    { pais: 'Noruega', flag: 'https://flagcdn.com/w320/no.png' },
    { pais: 'Nova Zelândia', flag: 'https://flagcdn.com/w320/nz.png' },
    { pais: 'Panamá', flag: 'https://flagcdn.com/w320/pa.png' },
    { pais: 'Paraguai', flag: 'https://flagcdn.com/w320/py.png' },
    { pais: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
    { pais: 'Qatar', flag: 'https://flagcdn.com/w320/qa.png' },
    { pais: 'República Democrática do Congo', flag: 'https://flagcdn.com/w320/cd.png' },
    { pais: 'República Tcheca', flag: 'https://flagcdn.com/w320/cz.png' },
    { pais: 'Senegal', flag: 'https://flagcdn.com/w320/sn.png' },
    { pais: 'Suécia', flag: 'https://flagcdn.com/w320/se.png' },
    { pais: 'Suíça', flag: 'https://flagcdn.com/w320/ch.png' },
    { pais: 'Tunísia', flag: 'https://flagcdn.com/w320/tn.png' },
    { pais: 'Turquia', flag: 'https://flagcdn.com/w320/tr.png' },
    { pais: 'Uruguai', flag: 'https://flagcdn.com/w320/uy.png' },
    { pais: 'Uzbequistão', flag: 'https://flagcdn.com/w320/uz.png' }
  ];


  // Função disparada quando o evento @Output(golMarcado) do filho acontece
  atualizarPlacarGeral(golsDoFilho: number): void {
    // Para simplificar a lógica na aula, cada clique aumenta 1 no total geral
    this.totalGolsRodada++;
  }
}
