import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  //Création d'un booléen qui indique si on est en résolution mobile
  //méthode .toprimise() => transforme en promise
  //On peut récupérer les info qui transite dans un Observable en temps réel grâce à un écouteur
  // (via .suscribe())
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),//on récupère la valeur de matches qui indique si la résolution ...
      shareReplay()
    );

    navList = [{
      name : "Accueil",
      path : "/accueil",
      icon : "tonicon0"
    },
    {
      name : "Profil",
      path : "/profil",
      icon : "tonicon5"
    },
    {
      name : "Médecins",
      path : "/medecins",
      icon : "tonicon1"
    },
    {
      name : "Médicaments",
      path : "/medicaments",
      icon : "tonicon3"
    },
    {
      name : "Prescription",
      path : "/prescription",
      icon : "tonicon4"
    },
    {
      name : "Rendez-vous",
      path : "/appointment",
      icon : "tonicon5"
    }
    ];

  constructor(private breakpointObserver: BreakpointObserver) {}

}
