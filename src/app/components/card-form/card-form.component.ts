import { DateFormControl } from './../../helpers/date-form-control';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {


  constructor() {}

  cardForm = new FormGroup({
    name: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3)
      ]),
    cardNumber: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]),
    expiration:new DateFormControl(null,
      [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/) //regular expression
      ]),
    securityCode : new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ])
  });

  ngOnInit(): void {}

  onSubmit(){
    console.log('seg')
  }

  resetForm(){
    this.cardForm.reset();
  }
}
