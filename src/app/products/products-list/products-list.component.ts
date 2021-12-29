import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit, AfterViewInit {

  @ViewChild("plist", { static: false }) screenmessage: ElementRef;
  produtos: Array<Product>;

  constructor(private _route: ActivatedRoute) {
    this.produtos = new Array<Product>();
  }
  ngAfterViewInit(): void {
    let clickText: Observable<any> = fromEvent(this.screenmessage.nativeElement, 'click');
    clickText.subscribe(() => { alert("clicou no texto"); return; })
  }

  ngOnInit(): void {
    this._route.data.subscribe(
      (response: any) => { this.produtos = response.produtos; },
      (error: any) => console.error('Não foi possível obter a lista de produtos: ' + error),
    )
    /*
    this._service.getProducts().subscribe(
      (products) => { this.produtos = response.produtos; },
      (error) => { console.log(error) }
    )
    */
  }

  changeStatus(p: Product) {
    p.ativo = !p.ativo;
  }

}
