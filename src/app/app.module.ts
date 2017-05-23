import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list/users-list.component';
import { UserListItemComponent } from './components/users-list/user-list-item/user-list-item.component';
import {UsersService} from "./components/users-list/services/users-service.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
