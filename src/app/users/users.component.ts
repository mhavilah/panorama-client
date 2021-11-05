import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from  '../user.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]> = of([]);

  selectedUser?:User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }  

  getUsers(): void { 
    this.users$ = this.userService.getUsers();
  }

  onSelect(user:User): void {
    this.selectedUser =  user;
    console.log(`Selected user: ${this.selectedUser.name}`);
  }
}
