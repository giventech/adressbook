import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookContentComponent } from './address-book-content.component';

describe('AddressBookContentComponent', () => {
  let component: AddressBookContentComponent;
  let fixture: ComponentFixture<AddressBookContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
