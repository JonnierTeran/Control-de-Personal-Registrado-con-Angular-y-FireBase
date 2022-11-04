import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaModel } from '../Models/Persona.models';

@Injectable()
export class DataService{
    
    ArregloP:PersonaModel[]
    constructor(private httpClient:HttpClient){
        this.ArregloP=[]
    }

    public RegistrarPersona(Persona:PersonaModel[]){
        this.httpClient.put('https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data.json', Persona).
        subscribe
        (
            Response=>{
                console.log('Se enviaron los datos de : '+ Response)
            }, Error => {
                console.log(Error)
            }
        )
    }

    public GetPersonas():PersonaModel[]{
       this.httpClient.get<PersonaModel[]>('https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data.json')
         .subscribe(
            (Response:PersonaModel[]) =>
            {
                Response.forEach(Element  =>{
                    this.ArregloP.push(Element);
                    
                })
                
                alert("El Personal Registrado en la base de datos fue Cargado Exitosamente!")
            }, Error =>{
               console.log(Error)
            }
       );

       return this.ArregloP;     
}

    public UpdatePersona(index:number,persona:PersonaModel){
        let Url:string;
        Url ='https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data/'+ index +'.json';
        this.httpClient.put(Url , persona).subscribe(
            Response =>{
                console.log(Response)
            }, Error => {
                console.log(Error)
                alert("Error Al actualizar")
            }
        )
    }

    public DeletePersona(index:number){
        let Url:string;
        Url ='https://registro-de-personal-3bae4-default-rtdb.firebaseio.com/Data/'+ index +'.json';
        this.httpClient.delete(Url).subscribe(
            Response =>{
                console.log(Response);
            }, Error => {
                console.log(Error)
                alert("Error Al Eliminar")
            }
        )

    }

}