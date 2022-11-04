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
      alert("Personal Registrado con exito!!");
  }
  
  public EncontrarPersona(index:number):PersonaModel{
    let Persona: PersonaModel = this.Personas[index];
    return Persona;
  }

  public ActualizarPersona(index:number, Persona:PersonaModel):void{
    this.Personas[index] = Persona; 
    this._DataService.UpdatePersona(index,Persona)
    alert('Actualizacion Exitosa')
  }

  public EliminarPersona(index:number):void{
    this.Personas.splice(index,1);
    this._DataService.DeletePersona(index);
    //Se vuelve a guardar el arreglo
    this.modificarPersonas();
    alert('Eliminacion Exitosa')
  }

  public modificarPersonas(){
    if(this.Personas != null){
      this._DataService.RegistrarPersona(this.Personas);
    }
  }
}
