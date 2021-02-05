import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


interface DialogData {
  message: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
   console.log(data);
  }

  ngOnInit(): void {}
}
