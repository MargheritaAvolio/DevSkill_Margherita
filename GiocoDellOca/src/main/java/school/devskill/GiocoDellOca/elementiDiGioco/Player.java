package school.devskill.GiocoDellOca.elementiDiGioco;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor


public class Player {

  private final String nome;
  private int posizione;
  private int nLanci;
  private boolean stop;
  private int ultimoTiro;

  public Player(String nome) {
    this.nome = nome;
    //default
    nLanci = 0;
    stop = false;
  }


  public void aggiungiLancio(){
    this.nLanci++;
  }
}

