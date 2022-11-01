//modulos Necesarios para definir el componente modulo
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Componentes de la aplicacion
import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

//Servicios
import { PersonaService } from './Services/Persona.service';
import { ListadoPersonasComponent } from './Components/listado-personas/listado-personas.component';
import { ErrorComponent } from './Components/error/error.component';


//Decorador del componente modulo
@NgModule({
  //declaracion de compontentes
  declarations: [AppComponent, FormularioComponent, ListadoPersonasComponent, ErrorComponent],
  //Declaracion de modulos
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  //Declaracion de servicios
  providers: [PersonaService],
  //Declaracion del primer componente
  bootstrap: [AppComponent],
})
//Creacion y exportacion de la clase
export class AppModule {}
