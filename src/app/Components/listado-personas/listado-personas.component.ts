import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.models';
import { PersonaService } from 'src/app/Services/Persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  Personas: PersonaModel[];

  constructor(
    private _PersonaService: PersonaService,
    private _Router: Router
  ) {
    this.Personas = this._PersonaService.Personas;
  }

  ngOnInit(): void {
    this.Personas = this._PersonaService.Personas;
  }

  AgregarNuevo() {
    this._Router.navigate(['Formulario/Registro']);
    
  }

  
  Seleccionar(i: number) {
    this._Router.navigate(['Formulario/Actualizar', i]);
  }
}
function TypeOf(personas: Object): any {
  throw new Error('Function not implemented.');
}
