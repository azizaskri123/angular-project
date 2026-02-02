import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title :string= 'Bienvenue sur MonApp' 
  color :string= '';
  description = 'Ceci est mon premier data binding';

  save() {
    console.log('Bouton save cliqué!');
    alert('✅ Données sauvegardées!');
  }
}
