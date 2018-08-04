import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as globals from '../../shared/address-collection';


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
    this.router.navigateByUrl('/addresslist');
  }
  //Collects the adresss 
  addAddressItem () {
    if (this.profileForm.valid) {
        let   newAddressItemData  =  this.profileForm.value;
        globals.addresses.push(newAddressItemData);
    } else {
      console.log("The form is not valid ")
    }
  }
  
}

