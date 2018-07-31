import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookItemFormComponent } from './address-book-item-form.component';

describe('AddressBookItemFormComponent', () => {
  let component: AddressBookItemFormComponent;
  let fixture: ComponentFixture<AddressBookItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
