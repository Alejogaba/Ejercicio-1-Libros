import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService  {

  createDb() {
    const libros = [
      {id: 0,isbn:123,titulo:'asd',precio_de_venta:100,popular:true }
    ];

    return {libros};
  }
  genId(tasks: Libro[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 0;
  }

}