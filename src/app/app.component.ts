import { Component } from '@angular/core';
import { PersonaModel } from './Models/Persona.models';

import { PersonaService } from './Services/Persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  constructor(private _PersonaService:PersonaService){
 

    
  }
  
}
