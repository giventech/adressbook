import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookItemFormComponent } from './address-book-item-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as globals   from '../../shared/address-collection'

describe('AddressBookItemFormComponent', () => {
  let component: AddressBookItemFormComponent;
  let fixture: ComponentFixture<AddressBookItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AddressBookItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

// Form validation unit test   
it('form should be  invalid when empty', () => {
  expect(component.profileForm.valid).toBeFalsy();
});

it('should create and addresss book component', () => {
    expect(component).toBeTruthy();
  });
 // Todo Manage asynch values to make sure it allright
  it('submitting a valida form emits an addres ', () => {
    expect(component.profileForm.valid).toBeFalsy();
    component.profileForm.controls['email'].setValue("test@test.com");
    component.profileForm.controls['password'].setValue("123456789");
    expect(component.profileForm.valid).toBeTruthy();
  
    let address: globals.address;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => address = value);
  
    // Trigger the login function
    component.login();
  
    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe("test@test.com");
    expect(user.password).toBe("123456789");
  });
  

});



