import { Component } from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.models';
import { PersonaService } from 'src/app/Services/Persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
    
  nombre:string;
  Apellidos:string;
  Option:boolean;
  constructor(private _PersonaService : PersonaService) { 
    this.nombre='';
    this.Apellidos='';
    this.Option=true;
  }


  public Registrar(Form:any){
    let PersonaNueva = new PersonaModel(this.nombre, this.Apellidos);
    this._PersonaService.setAgregarPersona(PersonaNueva);
    Form.reset();
    this.Option=false;
  }

}
