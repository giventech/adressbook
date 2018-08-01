import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Router, Routes} from '@angular/router';
import { AddressBookItemFormComponent } from './components/address-book-item-form/address-book-item-form.component';
import { AddressBookListComponent } from './components/address-book-list/address-book-list.component';
import { AddressBookItemComponent } from './components/address-book-item/address-book-item.component';

// Routes for the user interation 
const routes : Routes = [
   { path: 'address', component : AddressBookItemFormComponent}, 
   { path: '', component : AddressBookListComponent}, 
   { path: 'addresslist', component : AddressBookListComponent},
   { path: 'addressitem', component : AddressBookItemComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
