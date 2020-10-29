import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  isButtonClick = false

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onServerBtnClick(){
    return this.isButtonClick = true
  }
}
