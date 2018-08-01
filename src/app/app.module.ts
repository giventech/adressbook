import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputBase, MatInputModule} from '@angular/material'

import { AppComponent } from './app.component';
import { AddressBookHeaderComponent } from './components/address-book-header/address-book-header.component';
import { AddressBookFooterComponent } from './components/address-book-footer/address-book-footer.component';
import { AddressBookContentComponent } from './components/address-book-content/address-book-content.component';
import { AddressBookListComponent } from './components/address-book-list/address-book-list.component';
import { AddressBookItemComponent } from './components/address-book-item/address-book-item.component';
import { AddressBookItemDetailsComponent } from './components/address-book-item-details/address-book-item-details.component';
import { AddressBookItemFormComponent } from './components/address-book-item-form/address-book-item-form.component';
import { AddressBookSearchComponent } from './components/address-book-search/address-book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AddressBookHeaderComponent,
    AddressBookFooterComponent,
    AddressBookContentComponent,
    AddressBookListComponent,
    AddressBookItemComponent,
    AddressBookItemDetailsComponent,
    AddressBookItemFormComponent,
    AddressBookSearchComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // new modules added here
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AppRoutingModule
    
  ],
  providers: [],
  entryComponents: [AddressBookSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
