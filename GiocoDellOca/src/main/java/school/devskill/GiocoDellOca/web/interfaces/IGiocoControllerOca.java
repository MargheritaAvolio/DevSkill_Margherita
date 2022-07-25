package school.devskill.GiocoDellOca.web.interfaces;

import school.devskill.GiocoDellOca.web.command.InfoGiocatore;
import school.devskill.IGiocoController;

public interface IGiocoControllerOca extends IGiocoController {

  String giocaTurno();

  String aggiungiGiocatore(InfoGiocatore i);
}
