import { Component } from '@angular/core';
import { PersonaModel } from './Models/Persona.models';

import { PersonaService } from './Services/Persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Personas:PersonaModel[];
  
  Op:boolean;
  constructor(private _PersonaService:PersonaService){
    this.Personas = this._PersonaService.getPersonas();
  this.Op=false;
    
  }
  Reg(){
    this.Op=true;
  }
}
