package school.devskill.GiocoDellOca.web.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import school.devskill.GiocoController;
import school.devskill.GiocoDellOca.eccezioni.GiocoInCorsoException;
import school.devskill.GiocoDellOca.eccezioni.NoPlayersException;
import school.devskill.GiocoDellOca.elementiDiGioco.Player;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;
import school.devskill.GiocoDellOca.web.command.InfoGiocatore;
import school.devskill.GiocoDellOca.web.interfaces.IGiocoControllerOca;

@RestController
@RequestMapping("/oca/")

public abstract class GiocoDellOcaController extends GiocoController implements IGiocoControllerOca {

  private final IBoardManager boardManager;
  private final ObjectMapper michael;

  @Autowired
  public GiocoDellOcaController(IBoardManager boardManager, ObjectMapper michael) {
    super(boardManager, michael);
    this.boardManager = boardManager;
    this.michael = michael;
  }

  //affinchè il controller possa comunicare con il service


  @PostMapping("aggiungiGiocatore")
  @Override
  public String aggiungiGiocatore(@RequestBody InfoGiocatore i) {

    String message = "";

    try {
      boardManager.aggiungiGiocatore(michael.convertValue(i, Player.class));
      message = "Giocatore aggiunto con successo!";
    } catch (GiocoInCorsoException e) {
      e.printStackTrace();
      message = e.getMessage();
    }
    return message;
  }


  @PostMapping("giocaTurno")
  @Override
  public String giocaTurno() {
    String message = "";
    try {
      message = boardManager.giocaTurno();
    } catch (NoPlayersException e) {
      e.printStackTrace();
      message = e.getMessage();
    }
    return message;
  }

}
