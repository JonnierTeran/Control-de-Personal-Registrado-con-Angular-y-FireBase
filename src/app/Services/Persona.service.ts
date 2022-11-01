//Import del modelo necesario
import { PersonaModel } from '../Models/Persona.models';

//Creacion y exportacion del servicio
export class PersonaService {
  //Atributo del servicio
  private Personas: PersonaModel[];

  //inicializacion del arreglo
  constructor() {
    this.Personas = []
  }

  public getPersonas(): PersonaModel[] {
    return this.Personas;
  }

  public setAgregarPersona(Persona:PersonaModel):void{
      this.Personas.push(Persona);
  }
}
