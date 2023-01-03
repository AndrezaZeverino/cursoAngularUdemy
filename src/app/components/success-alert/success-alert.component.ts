import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'online'

  getServerStatus() {
    return this.serverStatus;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
