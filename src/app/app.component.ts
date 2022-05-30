import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  index: number;

  myTab = [
    {
      monNom: 'Barrette',
      monPrenom: 'Noémie'
    },
    {
      monNom: 'Brasseur',
      monPrenom: 'Jean'
    },
    {
      monNom: 'Blanc',
      monPrenom: 'Marc'
    },
    {
      monNom: 'Ainouz',
      monPrenom: 'Corentin'
    }
  ];

  onClickNom() {
    const app = document.getElementById("resultat");
    var child = app.lastElementChild; 
    while (child) {
      app.removeChild(child);
      child = app.lastElementChild;
    }    
    
    this.myTab.forEach(function (element) {
      console.log("Nom: " + element.monNom);
      const p = document.createElement("p");
      p.textContent = "Nom: " + element.monNom;
      app?.appendChild(p);
    });
  }

  onClickPrenom() {
    const app = document.getElementById("resultat");
    var child = app.lastElementChild; 
    while (child) {
      app.removeChild(child);
      child = app.lastElementChild;
    }

    this.myTab.forEach(function (element) {
      console.log("Prénom: " + element.monPrenom);
      const p = document.createElement("p");
      p.textContent = "Prénom: " + element.monPrenom;
      app?.appendChild(p);
    });
  }

  onSearchIndex() {
    if(this.index-1<=0 || this.index>this.myTab.length || this.index === undefined) {
      console.log("erreur");
    } else {
      const app = document.getElementById("resultat");
      var child = app.lastElementChild; 
      while (child) {
        app.removeChild(child);
        child = app.lastElementChild;
      } 
      console.log("Nom: " + this.myTab[this.index-1].monNom + ", Prenom: " + this.myTab[this.index-1].monPrenom);
      
      const p = document.createElement("p");
      p.textContent = "Nom: " + this.myTab[this.index-1].monNom + ", Prenom: " + this.myTab[this.index-1].monPrenom;
      app?.appendChild(p);
    }
  }
}