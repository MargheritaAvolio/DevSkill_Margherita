package school.devskill.GiocoDellOca.web.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;

public class GiocoDellOcaControllerBuilder {
    private IBoardManager boardManager;
    private ObjectMapper michael;

    public GiocoDellOcaControllerBuilder setBoardManager(IBoardManager boardManager) {
        this.boardManager = boardManager;
        return this;
    }

    public GiocoDellOcaControllerBuilder setMichael(ObjectMapper michael) {
        this.michael = michael;
        return this;
    }

    public GiocoDellOcaController createGiocoDellOcaController() {
        return new GiocoDellOcaController(boardManager, michael) {
          @Override
          public String aggiungiGiocatore() {
            return null;
          }
        };
    }
}
