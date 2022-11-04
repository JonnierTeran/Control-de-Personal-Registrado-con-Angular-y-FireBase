//Import del modelo necesario
import { PersonaModel } from '../Models/Persona.models';
//Import del Servicio de peticiones Ajax
import { DataService } from './Data.service';
//Import del Objeto Injectable para acceder al servicio secundario sin problemas
import { Injectable } from '@angular/core';

//Declaracion del injectable
@Injectable()
//Creacion y exportacion del servicio
export class PersonaService {
  //Atributo del servicio, un arreglo de tipo PersonaModel
  Personas: PersonaModel[];

  //inicializacion del arreglo y declaramos e inicializamos el _dataService
  constructor(private _DataService: DataService) {
    //Se inicializa el arreglo Personas con el metodo getPersonas del DataService,
    //el cual trae la informacion de todos los registros existentes en la base de datos
    this.Personas = this._DataService.GetPersonas();
  }

  /**
   * Metodo de tipo void para Agregar a una Persona
   * Recibe por parametros un obj de tipo PersonaModel
   */
  public setAgregarPersona(Persona: PersonaModel): void {
    //Primero Agrega al arreglo de personas el onjeto que recibe por parametros
    this.Personas.push(Persona);
    //Invocamos el metodo RegistrarPersona del DataServicio y le pasamos el Arreglo de personas por parametros para que realice su registro en la base de datos
    this._DataService.RegistrarPersona(this.Personas);
    //Por ultimo le informamos al usuario que tood ha salido bien
    alert('Personal Registrado con exito!!');
  }

  /**Metodo ActualizarPersona tipo Void
   * Recibe 2 parametros El indice y un Objeto de tipo persona Model
   */
  public ActualizarPersona(index: number, Persona: PersonaModel): void {
    //Verifica si el objeto actual en el indice ingreso , es igual al nuevo objeto, en caso de que asi sea Envia un mensaje de alerta diciendo que no hay cambios en el registro
    if (
      this.Personas[index].Nombre == Persona.Nombre &&
      this.Personas[index].Apellido == Persona.Apellido
    ) {
      alert('No se Registran cambios en el registro, intentelo Nuevamente');
    } else {
    /**de lo contrario, obtiene el registro en el indice ingresado y lo remplaza por el nuevo registro
     * y luego Accede al metodo UpdatePersona del DataService y le envia por parametro el indice y el objeto persona
     * para que lo actualice tambien en la base de datos  enviando un mensaje de actualizacion exitosa al usuario*/
      this.Personas[index] = Persona;
      this._DataService.UpdatePersona(index, Persona);
      alert('Actualizacion Exitosa');
    }
  }

  //Metodo SetNuevoRegistro
  public setNuevoRegistroEnBd() {
    //Verifica que el arreglo Personas no sea null y actualiza el registro de personas en la base de datos cuando asi lo requiera la situacion
    if (this.Personas != null) {
      this._DataService.RegistrarPersona(this.Personas);
    }
  }

  /**Metodo EliminarPersona de Tipo Void
   * Recibe 1 parametro de tipo number */
  public EliminarPersona(index: number): void {
    //Elimina el indice en el arreglo de tipo persona
    this.Personas.splice(index, 1);
    //Accede al metodo DeletePersona del DataService y le envia el indice para que el Registro sea eliminado tambien de la base de Datos
    this._DataService.DeletePersona(index);
    //Se vuelve a guardar el arreglo en la base de datos y se emite un mensaje al usuario
    this.setNuevoRegistroEnBd();
    alert('Eliminacion Exitosa');
  }

  /*Metodo para encontrar una persona y Usar sus datos en los inputs del formulario
   * Recibe un indice por parametro y busca ese indice en el arreglo
   * Exporta la persona a que corresponde el indice*/
  public EncontrarPersona(index: number): PersonaModel {
    let Persona: PersonaModel = this.Personas[index];
    return Persona;
  }
}
