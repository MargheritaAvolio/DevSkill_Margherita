package school.devskill;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import school.devskill.GiocoDellOca.eccezioni.GiocoInCorsoException;
import school.devskill.GiocoDellOca.eccezioni.NoPlayersException;
import school.devskill.GiocoDellOca.elementiDiGioco.InfoPlayer;
import school.devskill.GiocoDellOca.web.command.InfoGiocatore;

//interfaccia padre per i controller
//prende i metodi in comune
public interface IGiocoController {



  String reset();
  String statoPartita();

  String giocaTurno();
  String aggiungiGiocatore();}


