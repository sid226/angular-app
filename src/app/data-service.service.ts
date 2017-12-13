import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

 public users: User[]= [];

    constructor() {

      this.pushData(111,"John", "Dsouza", "test1@test.com", "2011-08-19");
      this.pushData(112,"Mary", "Vaz", "test2@test.com", "2017-05-18");
      this.pushData(113,"Ramesh", "Naik", "test3@test.com", "2016-06-16");
    }

    public pushData(id,fname, lname, email, join_date) {

      let temp = {
        id:id,
        fname: fname,
        lname: lname,
        email: email,
        date: join_date
      }

      this.users.push(temp);
    }


    public deleteUser(id): void {
      console.log("Inside service "+id);

      var index = this.users.findIndex(d => d.id === id);
      if (index > -1) {
        this.users.splice(index, 1);
      }
      // ... save user email
    }

   public getProjects():User[]
   {
     return this.users;
   }

}

interface User {
  id: number,
  fname: string,
  lname: string,
  email: string,
  date: string,

}
