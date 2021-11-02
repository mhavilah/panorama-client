import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  selectedUser?:User;

  constructor() { }

  ngOnInit(): void {  
  }

  onSelect(user:User) : void {
    this.selectedUser = user;
  }
}
