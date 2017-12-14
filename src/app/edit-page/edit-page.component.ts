import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  myForm: FormGroup;
  pageName:string;
  users: User[] = [];
  currentUser: User;
  private sub: any;
  id: number;
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    this.sub = this.route.params.subscribe(params => {
      if( params['id'] )
      {
        this.pageName="EDIT USER";
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      var index = this.users.findIndex(d => d.id === this.id);
      this.currentUser = this.users[index];
      }
      else
      {  this.pageName="NEW USER";}

    });


  }

  constructor(private route: ActivatedRoute, private dataService: DataService, fb: FormBuilder) {
    this.users = this.dataService.users;
    this.currentUser={
      id:0,
      fname: "",
      lname: "",
      email: "",
      date: ""
    };
    this.myForm = fb.group({
      'fname' : [null, Validators.required],
      'lname': [null, Validators.required],
      'email': [null, Validators.pattern("[^ @]*@[^ @]*") ],
      'date' : [null, Validators.required]
           });

  }

submitForm(value: any){
  console.log(value);

}

ngOnDestroy() {
  this.sub.unsubscribe();
}


}

interface User {
  id: number,
  fname: string,
  lname: string,
  email: string,
  date: string,

}
