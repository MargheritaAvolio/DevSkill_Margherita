package school.devskill;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import school.devskill.GiocoDellOca.eccezioni.GiocoInCorsoException;
import school.devskill.GiocoDellOca.eccezioni.NoPlayersException;
import school.devskill.GiocoDellOca.elementiDiGioco.InfoPlayer;
import school.devskill.GiocoDellOca.elementiDiGioco.Player;
import school.devskill.GiocoDellOca.service.implementations.BoardManagerImpl;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;

@RestController
@RequestMapping("oca")
public class GiocoController {
  protected final BoardManagerImpl boardManager;
  protected final ObjectMapper michael;

  @Autowired
  public GiocoController(IBoardManager boardManager, ObjectMapper michael) {
    this.boardManager = (BoardManagerImpl) boardManager;
    this.michael = michael;
  }

  @PostMapping ("/reset")
  public String reset() {
    try {
      return boardManager.reset();
    } catch (NoPlayersException e) {
      e.printStackTrace();
    }
    return "Gioco resettato correttamente";
  }

  @GetMapping("/statoPartita")
  public String statoPartita() {
    return boardManager.statoPartita();
  }


  @PostMapping("/aggiungiGiocatore")
  public String addPlayer(@RequestBody InfoPlayer i) throws GiocoInCorsoException {
    Player p = michael.convertValue(i,Player.class);
    return boardManager.aggiungiGiocatore(p);
  }

  @PostMapping("/giocaTurno")
  public String giocaTurno() throws NoPlayersException {
    return boardManager.giocaTurno();
  }
}


