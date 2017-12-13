import { Component, OnInit } from '@angular/core';

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



  constructor() {

    this.pushData(111,"John", "Dsouza", "test1@test.com", "12-12-2017");
    this.pushData(112,"Mary", "Vaz", "test2@test.com", "13-11-2017");
    this.pushData(113,"Ramesh", "Naik", "test3@test.com", "24-8-2017");
  }

  pushData(id,fname, lname, email, join_date) {

    let temp = {
      id:id,
      fname: fname,
      lname: lname,
      email: email,
      date: join_date
    }

    this.users.push(temp);
  }


  public deleteUser(item: string): void {
    console.log("Hello world!"+item);
    // ... save user email
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
