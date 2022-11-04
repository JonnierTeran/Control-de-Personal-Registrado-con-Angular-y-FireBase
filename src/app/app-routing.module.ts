//Import de los modulos necesarios Para el Router
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import de los componentes Que se vana registrar en las rutas
import { ErrorComponent } from './Components/error/error.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ListadoPersonasComponent } from './Components/listado-personas/listado-personas.component';

//contante de Arreglos que contendran las rutas y los componentes de cada una de ellas
const routes: Routes = [
  {path:'', component: ListadoPersonasComponent },
  {path:'Listado/Personas', component: ListadoPersonasComponent },
  {path:'Formulario/Registro', component: FormularioComponent},
  {path:'Formulario/Actualizar/:indice' , component: FormularioComponent},
  {path:'**', component: ErrorComponent}
];

//Decorador del modulo, que Importa la constante como parametro del metodo forRoot de RouterModule y luego lo esporta
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Export y creacion de la clase 
export class AppRoutingModule { }
