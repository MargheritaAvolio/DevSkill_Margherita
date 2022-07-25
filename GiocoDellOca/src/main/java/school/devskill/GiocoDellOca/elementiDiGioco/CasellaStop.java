package school.devskill.GiocoDellOca.elementiDiGioco;

import lombok.ToString;
import school.devskill.GiocoDellOca.eccezioni.DissallowedActionException;

@ToString
public class CasellaStop implements ICasellaSpeciale {

  @Override
  public boolean isStop() {
    return true;
  }

  // Non dovrebbe essere possibile, lancia eccezione!
  @Override
  public int calcolaPosizione(int posizioneGiocatore){
    throw new DissallowedActionException();
  }
}
