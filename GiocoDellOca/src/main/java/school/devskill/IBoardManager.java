package school.devskill;

import school.devskill.GiocoDellOca.eccezioni.GiocoInCorsoException;
import school.devskill.GiocoDellOca.eccezioni.NoPlayersException;
import school.devskill.GiocoDellOca.elementiDiGioco.Player;

public interface IBoardManager {

  void aggiungiGiocatore(Player p) throws GiocoInCorsoException;

  void Reset() throws NoPlayersException;

  String giocaTurno() throws NoPlayersException;

  String statoPartita();
}
