import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Components/error/error.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ListadoPersonasComponent } from './Components/listado-personas/listado-personas.component';


const routes: Routes = [
  {path:'', component: ListadoPersonasComponent},
  {path:'Listado/Personas', component: ListadoPersonasComponent },
  {path:'Formulario/Registro', component: FormularioComponent},
  {path:'Formulario/Actualizar/:indice' , component: FormularioComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
