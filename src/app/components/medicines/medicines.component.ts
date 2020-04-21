import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  ngOnInit() {
  }

  medicamentList = [{
    ID : 0,
    name : "CABOMETYX",    
    dose : "20 mg",
    type : "comprimé pelliculé",
    prix : "6358,39 €",
    stock : 10,
    effetindesirable : ""
  },
  {
    ID : 1,
    name : "HALDOL",    
    dose : "5 mg",
    type : "comprimé",
    prix : "2,51 €",
    stock : 10,
    effetindesirable : "état de confusion (délire, hallucinations, idées délirantes, paranoïa, aggresivité)"
  },
  {
    ID : 2,
    name : "M-M-RVAXPRO",    
    dose : "0.5 ml",
    type : "poudre et solvant pour suspension injectable en seringue préremplie",
    prix : "12,75 €",
    stock : 10,
    effetindesirable : ""
  },
  {
    ID : 3,
    name : "ULTRAPROCT",    
    dose : "100 g",
    type : "pommade rectale",
    prix : "",
    stock : 10,
    effetindesirable : ""
  }
  ];

  filteredMedicines = this.medicamentList;

  constructor() { }

  filterMedicines(q: string): void{
    let medicines = this.medicamentList;
    this.filteredMedicines = medicines;
    
    console.log(q)

    if (q !== '') {
      this.filteredMedicines = medicines.filter((medicines) => {
      const len = q.length;
      //const firstName = medicines.firstname.substr(0, len).toLowerCase();
      const Name = medicines.name.substr(0, len).toLowerCase();
      //const firstNameMatched = firstName === q.toLowerCase();
      const NameMatched = Name === q.toLowerCase();
      return NameMatched;
      })
    }

    console.log(this.filteredMedicines);
  }
}
