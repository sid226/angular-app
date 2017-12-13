import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data-service.service';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: User[]= [];

  ngOnInit(): void {
    //throw new Error("Method not implemented.");

  }

  constructor(private dataService: DataService ) {
    this.users= this.dataService.users;
  }

  public deleteUser(item: string,id): void {
    this.dataService.deleteUser(id);

  }

  public handleRefusalDelete(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }



}

interface User {
  id: number,
  fname: string,
  lname: string,
  email: string,
  date: string,

}
