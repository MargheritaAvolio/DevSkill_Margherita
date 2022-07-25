package school.devskill.GiocoDellOca.eccezioni;

//Estende Runtime -



public class DissallowedActionException extends RuntimeException{

  //opzionale, potrebbe essere semplicemente ignorata perchè non esegue codice
  public DissallowedActionException() {
    super("Azione non permessa!");
  }
}
