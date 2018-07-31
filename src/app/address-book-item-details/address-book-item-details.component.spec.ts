import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookItemDetailsComponent } from './address-book-item-details.component';

describe('AddressBookItemDetailsComponent', () => {
  let component: AddressBookItemDetailsComponent;
  let fixture: ComponentFixture<AddressBookItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
