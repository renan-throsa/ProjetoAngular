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

  isDirty: boolean;
  entryForm: FormGroup;
  usuario: Usuario;
  MASK = utilsBr.MASKS;

  constructor(private _fb: FormBuilder) {
  }

  get isNameValid(): boolean {
    return this.hasErros('nome');
  }

  get isCpValid(): boolean {
    return this.hasErros('cpf');
  }

  get isEmailValid(): boolean {
    return this.hasErros('email');
  }

  get isSenhaValid(): boolean {
    return this.hasErros('senha');
  }

  hasErros(field: string): boolean {
    return this.entryForm.get(field)?.errors
      && (this.entryForm.get(field).dirty || this.entryForm.get(field).touched)
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
    if (this.entryForm.dirty && this.entryForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.entryForm.value)
      this.isDirty = false;
    }
  }
}
