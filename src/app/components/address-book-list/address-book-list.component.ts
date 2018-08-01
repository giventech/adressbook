import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as globals from '../../shared/address-collection';
@Component({
  selector: 'ab-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrls: ['./address-book-list.component.scss']
})

export class AddressBookListComponent implements OnInit {

  addressCollection = globals.addresses;
  constructor(private router: Router){
  }
  ngOnInit() {
    console.log("These are the addresses");
    console.log(globals.addresses);
  }
  goToAddressForm () {
    this.router.navigateByUrl('/address');
  }
}
