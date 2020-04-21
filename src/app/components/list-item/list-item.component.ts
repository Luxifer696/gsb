import { Component, OnInit } from '@angular/core';
import { ListDataService } from 'src/app/services/list-data.service';
import { ItemInterface } from 'src/model/item.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  items: ItemInterface[] = [];
  foundId: ItemInterface[] = [];
  foundchaine: string[] = [];

  constructor(private readonly listDataService: ListDataService) { }

  ngOnInit() {
    this.items = this.listDataService.getListData();
    this.foundId = this.findById(this.items, 1);
    let stringArray = this.items.map((item) => item.description);
    this.foundchaine = this.findchaine(stringArray, 'bla');
    console.log(this.foundId);
  }

  findById(items: ItemInterface[], id: number): ItemInterface[] {
    return items.filter((item) => item.id === id);
    //la methode filter permet de filtrer un tableau d'élement suivant une condition
    //si la condition est validée, l'élement est conservé, sinon il est retirer
    //attention cette methode return un tableau
  }

  findchaine(items: string[], s: string): string[] {
    //c'est pareil ici, on utilise la méthode filter pour filtrer un tableau d'élément
    //la methode includes return un booléen, elle return vrais si la chaine de caractere contient celle passer en parametre
    //c'est une mthdoe de l'API JS, de la classe string
    return items.filter((item: string) => item.includes(s));
  }

  /**findchainebegin(items: string[], s: string): string[] {
    //on veut ici recuperer uniquement les chaines de caractere qui commence par la chaine passer en parametre
    const len = s.length; // on recupere la taille de la chaine passer en parametre
    //on veut ensuite filtrer ce tabkeau de chaine de caractere
    return items.filter((item) => )
    this.begining = item.substring(0, len); //on recupere le debut de la chaine courante
    //la methode API JS de la classe string permet de recuperer une sous-chaine de la chaine de caractere en question
    //le premier parametre correspond a l'indice de debut et le suivant la taille de la sous-chaine souhaité
    return begining.toLowerCase() === s.toLowerCase(); //on verifie qu'elle est = a la chaine passer en parametre
  });**/

}
