import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrls: ['./address-book-list.component.scss']
})
export class AddressBookListComponent implements OnInit {
  constructor(private router: Router){
  }
  ngOnInit() {
  }
  goToAddressForm () {
    this.router.navigateByUrl('/address');
  }
}
