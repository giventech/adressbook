import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookItemComponent } from './address-book-item.component';

describe('AddressBookItemComponent', () => {
  let component: AddressBookItemComponent;
  let fixture: ComponentFixture<AddressBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
