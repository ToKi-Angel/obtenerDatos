import { Component } from '@angular/core';
import { articulo } from './interfaces/articulos.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'obtenerDatos';

  public articulos: articulo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let url = 'http://localhost/productos/';
    this.http.get<articulo[]>(url)
      .subscribe((resultado) => {
        this.articulos = resultado;
        this.hayDatos = this.articulos.length > 0;
        console.log(this.articulos);
    });
  }
  public hayDatos: boolean = false;
}
