//Import del modelo necesario
import { Injectable } from '@angular/core';
import { PersonaModel } from '../Models/Persona.models';
import { DataService } from './Data.service';

@Injectable()
//Creacion y exportacion del servicio
export class PersonaService {
  //Atributo del servicio
   Personas: PersonaModel[];

  //inicializacion del arreglo
  constructor(private _DataService:DataService) {

    this.Personas = this._DataService.GetPersonas();

  }
  public setAgregarPersona(Persona:PersonaModel):void{
      this.Personas.push(Persona);
      this._DataService.RegistrarPersona(this.Personas)
  }
  public EncontrarPersona(index:number):PersonaModel{
    let Persona: PersonaModel = this.Personas[index];
    return Persona;
  }

  public ActualizarPersona(index:number, Persona:PersonaModel):void{
    this.Personas[index] = Persona; 
  }

  public EliminarPersona(index:number):void{
    this.Personas.splice(index,1);
  }
}
