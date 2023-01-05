import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-assignment2',
  templateUrl: './basics-assignment2.component.html',
  styleUrls: ['./basics-assignment2.component.css']
})
export class BasicsAssignment2Component implements OnInit {
  username = ''
  usernameCreationStatus = 'Username is empty '

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUsername(){
    this.usernameCreationStatus = this.username = '';
  }
}
