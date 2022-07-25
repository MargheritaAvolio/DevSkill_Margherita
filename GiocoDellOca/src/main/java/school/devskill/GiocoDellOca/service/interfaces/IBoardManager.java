package school.devskill.GiocoDellOca.service.interfaces;

import school.devskill.GiocoDellOca.eccezioni.GiocoInCorsoException;
import school.devskill.GiocoDellOca.eccezioni.NoPlayersException;
import school.devskill.GiocoDellOca.elementiDiGioco.Player;

public interface IBoardManager {


  String aggiungiGiocatore(Player player) throws GiocoInCorsoException;

  String reset() throws NoPlayersException;

  String giocaTurno() throws NoPlayersException;

  String statoPartita();
}
