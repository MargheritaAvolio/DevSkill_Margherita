package school.devskill.GiocoDellOca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import school.devskill.GiocoDellOca.elementiDiGioco.Player;
import school.devskill.GiocoDellOca.service.implementations.BoardManagerImpl;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;

@SpringBootApplication
public class GiocoDellOcaApplication {

	public static void main(String[] args) {
    SpringApplication.run(GiocoDellOcaApplication.class, args);

}}
