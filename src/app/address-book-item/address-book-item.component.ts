import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-address-book-item',
  templateUrl: './address-book-item.component.html',
  styleUrls: ['./address-book-item.component.scss']
})
export class AddressBookItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
