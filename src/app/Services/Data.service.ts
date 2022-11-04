//Modulos Necesarios Para el Servicio Data
//Modulo para Establecer conexiones al backend
import { HttpClient } from '@angular/common/http';

//Injectable para integrar el servicio httpClient a este servicio
import { Injectable } from '@angular/core';

//Modelo Necesario para los objetos
import { PersonaModel } from '../Models/Persona.models';

//Definimos el decorador Injectable para poder ingresar el servicio httpClient en este servicio data
@Injectable()

//Definicion y exportacion de la clase
export class DataService {
  //Definimos el arreglo de tipo personaModel que contendra los Registros del personan registrado en la base de datos
  ArregloP: PersonaModel[];

  //Metodo constructor Para declarar e inicializar el servicio externo de httpClient, y el ArregloP
  constructor(private httpClient: HttpClient) {
    this.ArregloP = [];
  }

  //Metodo para registrar un grupo de Personas En la base de datos, recibe por parametro el arreglo de personas a Registrar
  public RegistrarPersona(Persona: PersonaModel[]) {
    /**
     * Ejecutamos el metodo put desde el servicio HttpClient, para eliminar el servicio existente y realizar un nuevo registro
     * Con la informacion que tenga el arreglo.
     * Este Metodo put Recibe: La url del sevicio a conectar, el cabecero o Registro al que va hacer el envio, y el objeto que va a enviar
     * Este metodo regresa un observable al cual nos podemos subscribir para recolectar su respuesta o error
     */
    this.httpClient
      .put(
        'https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data.json',
        Persona
      )
      .subscribe(
        (Response) => {
          console.log('Se enviaron los datos de : ' + Response);
        },
        (Error) => {
          console.log(Error);
        }
      );
  }

  /**Metodo para Obtener toda la informacion de la base de datos
   * No Recibe parametros ni identificadores, ya que queremos un objeto con toda la informacion registrada en ese objeto
   */
  public GetPersonas(): PersonaModel[] {
    /**
     * Ejecutamos el metodo get desde el servicio HttpClient, para obtener todo el  registro de la base de datos
     * a este metodo se le especifica de que tipo de dato sera si retorno
     * Este Metodo get Recibe: La url del sevicio a conectar, el cabecero o Registro al que va hacer la peticion, y en este caso sin identificador, para obtener todos los registros
     * Este metodo get  regresa un observable al cual nos podemos subscribir para recolectar su respuesta o error
     * Luego de obtener la respuesta de este metodo, obtenemos un Arreglo de object el cual vamos a recorrer con un
     * Foreach y en cada iteracion vamos agregando cada objeto registrado a nuestro ArregloP Declarado al inicio del servicio
     * asi cargaremos nuestro arreglo con todos los objetos del servicio en la bd
     */
    this.httpClient
      .get<PersonaModel[]>(
        'https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data.json'
      )
      .subscribe(
        (Response: PersonaModel[]) => {
          Response.forEach((Element) => {
            this.ArregloP.push(Element);
          });
          alert(
            'El Personal Registrado en la base de datos fue Cargado Exitosamente!'
          );
        },
        (Error) => {
          console.log(Error);
        }
      );
    return this.ArregloP;
  }

  //Metodo para Actualizar una persona en la base de datos, recibe por parametro el inidce o identidicador y el nuevo objeto de persona a Registrar
  public UpdatePersona(index: number, persona: PersonaModel) {
    /**Se cre una Url que se pasa por parameto al metodo put
     * La url lleva la url del servicio, el cabecero del registro, y el indice que recibe por parametro .json,
     * Ejecutamos el metodo put desde el servicio HttpClient, para eliminar el registro existente en ese indice  y realizar un nuevo registro
     * Con la informacion que tenga el objeto que recibimos por parametro.
     * Este Metodo put Recibe: La url del sevicio a conectar, el cabecero o Registro al que va hacer el envio, el indice del registro a editar y el objeto que va a enviar
     * Este metodo regresa un observable al cual nos podemos subscribir para recolectar su respuesta o error
     */
    let Url: string;
    Url =
      'https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data/' +
      index +
      '.json';
    this.httpClient.put(Url, persona).subscribe(
      (Response) => {
        console.log(Response);
      },
      (Error) => {
        console.log(Error);
        alert('Error Al actualizar');
      }
    );
  }

  //Metodo para eliminar un registro en la base de datos, recibe por parametros el indice del elemento a eliminar
  public DeletePersona(index: number) {
    /**Se cre una Url que se pasa por parameto al metodo delete
     * La url lleva la url del servicio, el cabecero del registro, y el indice que recibe por parametro .json,
     * Ejecutamos el metodo delete desde el servicio HttpClient, para eliminar el registro existente en ese indice
     * Este Metodo delete Recibe: La url del sevicio a conectar, el cabecero o Registro al que va hacer la peticion y el indice del registro a eliminar
     * Este metodo regresa un observable al cual nos podemos subscribir para recolectar su respuesta o error
     */
    let Url: string;
    Url =
      'https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data/' +
      index +
      '.json';
    this.httpClient.delete(Url).subscribe(
      (Response) => {
        console.log(Response);
      },
      (Error) => {
        console.log(Error);
        alert('Error Al Eliminar');
      }
    );
  }
}
