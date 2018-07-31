import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookSearchComponent } from './address-book-search.component';

describe('AddressBookSearchComponent', () => {
  let component: AddressBookSearchComponent;
  let fixture: ComponentFixture<AddressBookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
