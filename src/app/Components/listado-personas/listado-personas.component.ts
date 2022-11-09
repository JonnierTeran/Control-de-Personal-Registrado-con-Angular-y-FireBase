//Modulo de componente y hooks
import { Component, OnInit } from '@angular/core';
//Import del modelo
import { PersonaModel } from 'src/app/Models/Persona.models';
//Import de los servicios
import { PersonaService } from 'src/app/Services/Persona.service';
import { Router } from '@angular/router';

//Decordador del componente
@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
//Export y clase del componente
export class ListadoPersonasComponent implements OnInit {

  //Atributo Arreglo  de tipo personamodel
  public Personas: PersonaModel[];
  
  //Se injectan los servicios de PersonaService y de Router
  constructor(
    private _PersonaService: PersonaService,
    private _Router: Router
  ) {
    //Se inicializa el arreglo de Personas con el arreglo definido en el Servicio personasService
    this.Personas = this._PersonaService.Personas;
  }

  //Se Carga el arreglo de Personas con el arreglo definido en el Servicio personasService
  ngOnInit(): void {
    this.Personas = this._PersonaService.Personas;
  }

  //Metodo para ir al componente de registro
  public AgregarNuevoPersonal() {
    this._Router.navigate(['Formulario/Registro']);
  }

  //Metodo para ir al componente de registro en modo edicion, enviando como parametro de la Url el indice de cada elemento
  public SeleccionarPersona(i: number) {
    this._Router.navigate(['Formulario/Actualizar', i]);
  }
}
