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
                Response.forEach(Element =>{
                    this.ArregloP.push(Element);
                })
            }, Error =>{
               Error
            }
       );

       return this.ArregloP;
       
           
}

}