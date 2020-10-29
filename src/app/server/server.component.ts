import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  isServerStatus: string = 'offline';
  fromMethodValue = 'This is from method'
  inputValue = '';
  
  constructor() { }

  ngOnInit(): void {
  }


  fromMethod(){
    return this.fromMethodValue;
  }
  
  getFirstName(event: any){
    console.log(event)
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
