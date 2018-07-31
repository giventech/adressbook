import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-address-book-item-form',
  templateUrl: './address-book-item-form.component.html',
  styleUrls: ['./address-book-item-form.component.scss']
})

export class AddressBookItemFormComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  
  constructor(private fb: FormBuilder, private router:Router) { }
  // Naivgate back to the adress List 
  goToAddressForm () {

    console.log("Hello people");
    this.router.navigateByUrl('/addresslist');
  }
  
}

