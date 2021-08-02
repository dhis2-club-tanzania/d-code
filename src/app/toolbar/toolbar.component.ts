import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(LoginComponent);
  }

  ngOnInit(): void {
  }

}

