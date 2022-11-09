// Import del modulo del componente
import { Component, OnInit } from '@angular/core';
//import del modelo de persona
import { PersonaModel } from 'src/app/Models/Persona.models';
//Import de los servicios
import { PersonaService } from 'src/app/Services/Persona.service';
import { ActivatedRoute, Router } from '@angular/router';

//Definicion del decorador del componente
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

//Exportacion y creacion de la clase FormularioComponent
export class FormularioComponent implements OnInit {
  //Atributos para el two way Binding de los inputs
  public nombreInput: string;
  public ApellidosInput: string;

  //Atributo para almacenar el parametro por url
  public indiceUrl: number;

  /**Metodo constructor
   * Injectamos los servicios de Persona Service para acceder a sus metodos del crud en la bd
   * injectamos el Router Para realizar las Redirecciones necesarias en la web
   * Injectamos el ActivtedRoute para recibir el dato enviado por parametro
   * Inicializamos los atributos declarados anteriormente
   */
  constructor(
    private _PersonaService: PersonaService,
    private _Router: Router,
    private _Route: ActivatedRoute
  ) {
    this.nombreInput = '';
    this.ApellidosInput = '';
    this.indiceUrl = 0;
  }

  /**Metodo ngOnInit (Hooks de angular)*/
  ngOnInit(): void {
    //Recuperamos el valor del dato ingresado por parametro y se asigna a el atriburo IndiceUrl
    this.indiceUrl = this._Route.snapshot.params['indice'];

    /**Validacion del modo edicion
     * Si Se envio algun dato por parametro, cargamos los Inputs con la informacion del objeto encontrado en esa posicion
     * por medio del metodo encontrar persona del servicio personasService
     */
    if (this.indiceUrl) {
      let Persona: PersonaModel;
      Persona = this._PersonaService.EncontrarPersona(this.indiceUrl);
      this.nombreInput = Persona.Nombre;
      this.ApellidosInput = Persona.Apellido;
    }
  }

  //Metodo Registrar Persona, recibe por parametro el formulario angular
  public RegistrarPersona(Form: any): void {
    //Se crea un objeto de tipo PersonaModel y se asigna a una variable
    let PersonaNueva: PersonaModel;
    PersonaNueva = new PersonaModel(this.nombreInput, this.ApellidosInput);
    //SeEjecuta el metodo setAgregarPersona del servicio PersonaService
    //y se le envia como argumento el objeto creado anteriormente, para realizar un nuevo registro
    this._PersonaService.setAgregarPersona(PersonaNueva);
    //Se resetean los valores del formulario
    Form.reset();
    //Redireccion al componente donde se Listan los usuarios Registrados
    this._Router.navigate(['Listado/Personas']);
  }

  //Metodo cancelar, Redirecciona al componente de listar usuarios registrados
  public Cancelar(): void {
    this._Router.navigate(['Listado/Personas']);
  }

  //Metodo para actualizar una persona
  public ActualizarPersona(): void {
    //Se crea un objeto de tipo PersonaModel y se asigna a una variable
    let PersonaNueva: PersonaModel;
    PersonaNueva = new PersonaModel(this.nombreInput, this.ApellidosInput);
    //SeEjecuta el metodo ActualizarPersona del servicio PersonaService
    //y se le envia como argumento el indice tomado por la url y el objeto creado anteriormente, para realizar un nuevo registro
    this._PersonaService.ActualizarPersona(this.indiceUrl, PersonaNueva);
    //Redireccion al componente donde se Listan los usuarios Registrados
    this._Router.navigate(['Listado/Personas']);
  }

  //Metodo para eliminar una persona
  public EliminarPersona(): void {
    //Accede al metodo eliminarpersona del servicio PersonaService enviando por argumento el indice obtenido por url
    this._PersonaService.EliminarPersona(this.indiceUrl);
    //Redireccion al componente donde se Listan los usuarios Registrados
    this._Router.navigate(['Listado/Personas']);
  }
}
