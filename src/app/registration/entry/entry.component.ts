import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil'
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styles: [
  ]
})
export class EntryComponent implements OnInit {

  entryForm: FormGroup;
  usuario: Usuario;
  MASK = utilsBr.MASKS;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])])
    let senhaConfirmacao = new FormControl('',
      [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]
    )

    this.entryForm = this._fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirmacao,
    });

  }

  addUser() {
    this.usuario = Object.assign({}, this.usuario, this.entryForm.value)
  }
}
