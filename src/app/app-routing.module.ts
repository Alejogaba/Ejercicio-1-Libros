import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaLibrosComponent} from './consulta-libros/consulta-libros.component';
import {RegistroLibrosComponent} from './registro-libros/registro-libros.component';

const routes: Routes = [{path:'Consulta-libros',component:ConsultaLibrosComponent},
{path:'Registro-libros',component: RegistroLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
