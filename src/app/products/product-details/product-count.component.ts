import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
    selector: 'app-product-count',
    template: `
        <div>
            <h3>
                Produtos
            </h3>
            <div>
                Produtos ativos: {{contadorAtivos()}} no total de {{products?.length}} produtos <br><br> 
            </div>
        </div>

    `,
})
export class ProductsCountComponent {

    @Input() products: Product[];

    constructor() {
        this.products = new Array<Product>();
    }

    contadorAtivos(): number {
        if (!this.products) return 0;
        return this.products.filter((p: Product) => p.ativo).length;
    }

}
