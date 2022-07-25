package school.devskill.GiocoDellOca.eccezioni;
//OBBLIGATORIA
public class NoPlayersException extends Exception {
  public NoPlayersException() {
    super("Non ci sono player nella paritita");
  }
}
