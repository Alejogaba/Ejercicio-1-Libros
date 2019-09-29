import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroLibrosComponent } from './registro-libros/registro-libros.component';
import { ConsultaLibrosComponent } from './consulta-libros/consulta-libros.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LibroService } from './services/libro.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroLibrosComponent,
    ConsultaLibrosComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
