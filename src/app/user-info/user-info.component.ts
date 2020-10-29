import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  firstName = 'George'
  lastName  = 'Joestar'
  age = '18'
  fullName = ''
  constructor() { }

  ngOnInit(): void {
  }

  getFullName(){
    this.fullName = this.firstName + ' ' + this.lastName
    return this.fullName
  }
}
