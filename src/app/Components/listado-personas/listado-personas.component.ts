import { Component, Input} from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.models';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent  {
  
  @Input('Personas') Personas:PersonaModel[];

  constructor(){
    this.Personas = []
}
}