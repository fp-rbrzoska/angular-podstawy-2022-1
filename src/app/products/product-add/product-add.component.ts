import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'fp-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  myFormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl({
      value: '',
      disabled: true
    }, [Validators.minLength(5), this.dupaValidator]),
    price: new FormControl({
      value: null,
      disabled: true
    })
  })
  constructor() { }

  ngOnInit(): void {
    this.myFormGroup.valueChanges.subscribe(v => console.log(v))
    this.myFormGroup.get('name')?.statusChanges.subscribe(status => {
      if(status === 'INVALID') {
        this.myFormGroup.get('description')?.disable()
        this.myFormGroup.get('price')?.disable()
      } else {
        this.myFormGroup.get('description')?.enable()
        this.myFormGroup.get('price')?.enable()
      }
    })

  }

  save() {
    if (this.myFormGroup.invalid) {
      console.error('INVALID')
    } else {
      console.log(this.myFormGroup.value)
    }

  }

  dupaValidator(control: AbstractControl): ValidationErrors | null{
    if(control.value.includes('dupa')) {
      return {
        dupaError: true
      }
    } else {
      return null
    }
  }

}
