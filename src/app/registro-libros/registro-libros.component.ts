import { Component, OnInit ,Input} from '@angular/core';
import{Libro} from '../models/libro';
import{LibroService} from '../services/libro.service';
import { from } from 'rxjs';
import {ALERTS}from '../Alert-list';
import {Alert} from '../alert';
import { Location } from '@angular/common';


@Component({
  selector: 'app-registro-libros',
  templateUrl: './registro-libros.component.html',
  styleUrls: ['./registro-libros.component.css']
})
export class RegistroLibrosComponent implements OnInit {
libro:Libro;
libros:Libro[];
alerts: Alert[];
  constructor(
    private libroservice:LibroService
    ,private location:Location
  ) { this.reset()}

close(alert: Alert) {
  this.alerts.splice(this.alerts.indexOf(alert), 1);
}

reset() {
  this.alerts = Array.from(ALERTS);
}
  ngOnInit() {
    this.libro= new Libro();
  }
  AddLibro(): void {
    if (!this.libro) { return; }
    this.libroservice.add(this.libro).subscribe();
  this.ngOnInit();
  }
  Add():void{
    this.libroservice.Guardarlocal(this.libro)
    alert("Registrado");
    this.location.back();
  }

}
