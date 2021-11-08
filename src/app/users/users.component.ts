import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from  '../user.service';
import { of, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { LoadingService } from '../loading/loading.service';

enum LoadingIndicator {
  ASYNC_PIPE
}

@UntilDestroy()
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  LoadingIndicator = LoadingIndicator;
  users$: Observable<User[]> = of([]);

  selectedUser?:User;

  constructor(private userService: UserService,
              public loadingService: LoadingService // accessed from the template
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }  

  ngOnDestroy() {
    console.log("UsersComponent destroyed");
  }

  getUsers(): void { 
    this.users$ = 
      this.loadingService.doLoading(
      this.userService.getUsers(),
      this,
      LoadingIndicator.ASYNC_PIPE )
      // .pipe(untilDestroyed(this)) // Not sure if we need this
      ;
  }

  onSelect(user:User): void {
    this.selectedUser =  user;
    console.log(`Selected user: ${this.selectedUser.name}`);
  }
}
