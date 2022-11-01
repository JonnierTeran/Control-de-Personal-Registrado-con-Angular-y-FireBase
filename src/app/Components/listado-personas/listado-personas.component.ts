import { Component, Input} from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.models';
import { PersonaService } from 'src/app/Services/Persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent  {
  
  Personas:PersonaModel[];
 
  constructor(private _PersonaService:PersonaService,
              private _Router:Router){
    this.Personas = this._PersonaService.getPersonas();

    
  }

  AgregarNuevo(){
    this._Router.navigate(['Formulario/Registro']);
  }
  Seleccionar(i:number){
    this._Router.navigate(['Formulario/Actualizar',i]);
  }
}
