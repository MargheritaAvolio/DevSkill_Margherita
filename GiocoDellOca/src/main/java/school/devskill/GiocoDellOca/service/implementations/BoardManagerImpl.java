package school.devskill.GiocoDellOca.service.implementations;

import org.springframework.stereotype.Service;
import school.devskill.GiocoDellOca.eccezioni.DissallowedActionException;
import school.devskill.GiocoDellOca.eccezioni.GiocoInCorsoException;
import school.devskill.GiocoDellOca.eccezioni.NoPlayersException;
import school.devskill.GiocoDellOca.elementiDiGioco.CasellaNumerica;
import school.devskill.GiocoDellOca.elementiDiGioco.CasellaStop;
import school.devskill.GiocoDellOca.elementiDiGioco.ICasellaSpeciale;
import school.devskill.GiocoDellOca.elementiDiGioco.Player;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Service("BoardManager")
//gestione Turni, board, giocatori
public class BoardManagerImpl implements IBoardManager {

  //uso l'interfaccia per comprendere entrambe le caselle - non ho
  //solo quelle normali ma in quella posizione avremo NULL
  private List<ICasellaSpeciale> caselle;
  private List<Player> players;
  private final int dimensioneBoard = 14 ;
  private boolean isOver = false;
  protected boolean inCorso;
  private String vincitore;


  public BoardManagerImpl() {
    this.players = new ArrayList<>();
    caselle = new ArrayList<>();
    creaBoard();
    inCorso= false;
  }

  private void creaBoard(){

    for (int i= 0; i<dimensioneBoard;i++){

      switch (i) {
        case 1 -> caselle.add(new CasellaNumerica(2));
        case 5 -> caselle.add(new CasellaNumerica(-1));
        case 7 -> caselle.add(new CasellaNumerica(3));
        case 8 -> caselle.add(new CasellaNumerica(0));
        case 9 -> caselle.add(new CasellaStop());
        case 12 -> caselle.add(new CasellaNumerica(-3));
        default -> caselle.add(null);
      }
    }
  }
  public String aggiungiGiocatore(Player p) throws GiocoInCorsoException {

    if (inCorso){
      throw new GiocoInCorsoException();
  }
    else {players.add(p);
  }
    return "Giocatore aggiunto";
  }

    public int lancioDadi() {
    Random random = new Random();
    int value = 0;
    try {
      Thread.sleep(500);
      value = random.nextInt(7 - 1) + 1;  //genera numeri da 1 a 6
    } catch (InterruptedException e) {
      e.printStackTrace();
      value = random.nextInt(7 - 1) + 1;  //genera numeri da 1 a 6
    }
    return value;

    }


  public String reset() throws NoPlayersException {

    if(players.size()<=0){
      throw new NoPlayersException();
    }
    isOver = false;
    for(int i =0; i < players.size();i++) {
      Player playerCorrente = players.get(i);
      playerCorrente.setPosizione(0);
      playerCorrente.setNLanci(0);
      playerCorrente.setStop(false);
    }
    return "Gioco resettato";
  }


  public String giocaTurno() throws NoPlayersException {
    int giocatoreVincente = 0;


    if (players.size() == 0){
      throw new NoPlayersException();
    }
    if (!inCorso) inCorso = true;

    try{
      //turno

    for (int i = 0; i < players.size(); i++) {
      Player corrente = players.get(i);

      if (!corrente.isStop()) {
        giocatoreVincente = i;
        //posizione
        int risultatoDado = lancioDadi();
        int casellaArrivoTemp = corrente.getPosizione()+ risultatoDado;

        corrente.setUltimoTiro(risultatoDado);
        try{


        ICasellaSpeciale casellaArrivo = caselle.get(casellaArrivoTemp);
        //se è null queste operazioni non sono permesse
          if (casellaArrivo != null) {

          try {
            casellaArrivoTemp = casellaArrivo.calcolaPosizione(casellaArrivoTemp);
          } catch (DissallowedActionException e) {
            e.printStackTrace();
            corrente.setStop(true);
          }
          }

        }catch (IndexOutOfBoundsException e){
          isOver= true;
          break;
        } finally{
          corrente.aggiungiLancio();
          corrente.setPosizione(casellaArrivoTemp);
        }
      }else{
        corrente.setStop(false);
      }
    }
    }catch (Exception e){
      e.printStackTrace();
      System.out.print(players.get(giocatoreVincente));
      isOver= true;
    }
      if (isOver) {
    inCorso = !inCorso;
    return "Game Over" + players.get(giocatoreVincente);
  }
    return "Turno concluso \n\n"+ players;
}

    @Override
  public String statoPartita(){
    return "Partita in corso:" + inCorso + "" +players.toString();
  }

}
