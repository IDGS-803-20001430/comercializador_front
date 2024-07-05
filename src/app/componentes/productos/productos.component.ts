import { Component, OnInit } from '@angular/core';
import { ComercializadoraService } from '../../servicios/comercializadora.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productosOriginales: any[] = [];
  public productosFiltrados: any[] = [];
  selectedItem: string = '';
  ingredient: string = '';

  constructor(private _comercializadoraService: ComercializadoraService) {}

  ngOnInit(): void {
    this._comercializadoraService.getListProductsGenral().subscribe({
      next: (data) => {
        console.log(data);
        this.productosOriginales = data;
        this.productosFiltrados = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  search(event: any) {
    const query = event.target.value.toLowerCase().trim();
    this.selectedItem = query;

    if (query === '') {
      this.productosFiltrados = this.ingredient ? this.filterBySelectedCategory() : this.productosOriginales;
    } else {
      this.productosFiltrados = this.productosOriginales.filter(producto => {
        const matchesName = producto.nombre.toLowerCase().includes(query);
        const matchesCategory = this.ingredient ? producto.idCategoria.toString() === this.ingredient : true;
        return matchesName && matchesCategory;
      });
    }
  }

  filterByCategory(category: number) {
    this.selectedItem = ''; 
    this.ingredient = category.toString(); 
    this.productosFiltrados = this.filterBySelectedCategory();
  }

  filterBySelectedCategory() {
    return this.productosOriginales.filter(producto => 
      producto.idCategoria.toString() === this.ingredient
    );
  }

  onSelect(event: any) {
    const selectedProduct = this.productosOriginales.find(producto => 
      producto.idProducto === event.idProducto || producto.nombre === event.nombre
    );
    if (selectedProduct) {
      this.productosFiltrados = [selectedProduct];
    }
  }
}
