import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  openDialog(message) {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '400px',
      data: { message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  login(userForm: FormGroup) {
    const payload = userForm.value;
    if (!payload.username) {
      return this.openDialog('Enter Username i.e demo');
    }
    if (!payload.password) {
      return this.openDialog('Enter Password i.e demo');
    }
    if (
      payload.username.toLowerCase() === 'demo' &&
      payload.password.toLowerCase() === 'demo'
    ) {
      return this.router.navigateByUrl('home');
    } else {
      return this.openDialog('Username and password incorrect');
    }
  }
}
