import { Component } from '@angular/core';
import { INavigation } from './Navigation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent {
  
  nav: INavigation[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'Produtos',
      exact: false,
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: false,
      admin: false
    },
    {
      link: '/todo',
      name: 'Todo',
      exact: false,
      admin: false
    }
  ];
}
