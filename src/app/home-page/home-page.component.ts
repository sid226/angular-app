import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: User[] = [];
  order: string = 'name';
  reverse: boolean = false;
  ngOnInit(): void {
    //throw new Error("Method not implemented.");

  }
  public icon = 'close';

  public changeIcon(newIcon: string) {
    this.icon = newIcon;
  }

  constructor(private dataService: DataService,private excelService:ExcelService) {
    this.users = this.dataService.users;
  }
  setOrder(order: string) {
    this.order = order;
    if (this.reverse == false)
      this.reverse = true;
    else
      this.reverse = false;

  }

  public deleteUser(item: string, id): void {
    this.dataService.deleteUser(id);

  }

  public handleRefusalDelete(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

  public exportData() {
    this.excelService.exportAsExcelFile(this.users,"ExportUsers");
  }

}

interface User {
  id: number,
  fname: string,
  lname: string,
  email: string,
  date: string,

}
