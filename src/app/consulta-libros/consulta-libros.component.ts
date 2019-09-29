import { Component, OnInit } from '@angular/core';
import{LibroService} from '../services/libro.service';
import{Libro} from '../models/libro';

@Component({
  selector: 'app-consulta-libros',
  templateUrl: './consulta-libros.component.html',
  styleUrls: ['./consulta-libros.component.css']
})
export class ConsultaLibrosComponent implements OnInit {
 libros:Libro[];
  constructor(private libroservice:LibroService) { }

  ngOnInit() {
    this.libros=this.libroservice.Retornarlocal();
    console.log(this.libros);
    this.getAll();
  }
  getAll() {
    this.libroservice.get().subscribe(libros => {
      return this.libros = libros;
    });
    }
}
