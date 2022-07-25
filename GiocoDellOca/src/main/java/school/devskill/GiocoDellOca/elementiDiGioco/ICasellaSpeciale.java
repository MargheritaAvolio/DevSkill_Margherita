package school.devskill.GiocoDellOca.elementiDiGioco;

import school.devskill.GiocoDellOca.eccezioni.DissallowedActionException;

public interface ICasellaSpeciale {

  boolean isStop();
  int calcolaPosizione(int posizioneGiocatore) throws DissallowedActionException;
}
