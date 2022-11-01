import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'Personas/Registro', component: AppComponent},
  {path:'Formulario/Registro', component: FormularioComponent},
  {path:'**' component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
