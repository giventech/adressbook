import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-address-book-search',
  templateUrl: './address-book-search.component.html',
  styleUrls: ['./address-book-search.component.scss']
})

export class AddressBookSearchComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
   constructor(private router: Router ) {
  
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
       startWith(''),
       map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  goToAddressForm () {
    this.router.navigateByUrl('/address');
  }

}




