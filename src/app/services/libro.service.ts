import { Injectable } from '@angular/core';
import {Libro} from '../models/libro';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private libroUrl = 'api/libros';


  ngOnInit(){

  }
  add(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.libroUrl, libro,  this.httpOptions).pipe(
      tap((newTask: Libro) => this.log(`Se registro la informacion con el id=${newTask.id}`)),
      catchError(this.handleError<Libro>('add'))
      );
  }
  get(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.libroUrl).pipe(
      tap(tasks => {
        return this.log('Consulta realizada');
      }),
      catchError(this.handleError<Libro[]>('get', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       
      console.error(error); 
        
      this.log(`${operation} Fallo: ${error.message}`);
       
      return of(result as T);
    };
  }
  private log(message: string) {
    alert(`libroService: ${message}`);
   }
 


  Guardarlocal(libro:Libro):void{
    let libros:Libro[]=[];
    if(localStorage.getItem('libros')!=null){

      libros =JSON.parse(localStorage.getItem('libros'));
    }
    alert (JSON.stringify(libro));
    libros.push(libro);
    localStorage.setItem('libros',JSON.stringify(libro));
  }
  Retornarlocal():Libro[]{
    return  JSON.parse(localStorage.getItem("libros"));
  }
  constructor(private http: HttpClient) { }
}
