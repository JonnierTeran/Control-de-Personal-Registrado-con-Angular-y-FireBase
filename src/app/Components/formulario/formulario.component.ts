import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.models';
import { PersonaService } from 'src/app/Services/Persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    
  nombre:string;
  Apellidos:string;

  indice:number;

  
  constructor(private _PersonaService : PersonaService,
              private _Router:Router,
              private _Route:ActivatedRoute) { 
    this.nombre='';
    this.Apellidos='';
    this.indice = 0;
 
   
  }

  ngOnInit(): void {
    this.indice = this._Route.snapshot.params['indice'];

    if(this.indice){
      let Persona: PersonaModel;
      Persona = this._PersonaService.EncontrarPersona(this.indice);
      this.nombre = Persona.Nombre;
      this.Apellidos = Persona.Apellido;

    }
  }

  public Registrar(Form:any){
    let PersonaNueva = new PersonaModel(this.nombre, this.Apellidos);
    this._PersonaService.setAgregarPersona(PersonaNueva);
    Form.reset();
    this._Router.navigate(['Listado/Personas']);
  }

  public Cancelar(){
    this._Router.navigate(['Listado/Personas']);
  }

  public ActualizarPersona(){
    let PersonaNueva:PersonaModel;
    PersonaNueva = new PersonaModel(this.nombre, this.Apellidos);
    this._PersonaService.ActualizarPersona(this.indice,PersonaNueva);
    this._Router.navigate(['Listado/Personas']);
  }

  public EliminarPersona():void{
    this._PersonaService.EliminarPersona(this.indice);
    this._Router.navigate(['Listado/Personas']);
  }

}
