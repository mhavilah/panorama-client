import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users: string[] = [ "Matt", "Mike", "Mal" ];

  user : User = {
      id: 1,
    name: 'Leanne Graham'
  };

  fromAssetsFolder : any;

  // constructor(private http: HttpClient) { }
  constructor() { }

  ngOnInit(): void {
    // this.http.get('/assets/users.json').subscribe(data => {
    //   this.fromAssetsFolder = data;
    // });
  
  }

}
