import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MdDialog) {}
  title = 'My App';

  openDialog() {
    let dialogRef = this.dialog.open(UserInfoDialog);
    // dialogRef.afterClosed().subscribe(result => {
    //   // this.selectedOption = result;
    // });
  }
}

@Component({
  selector: 'user-info-dialog',
  templateUrl: './user-info-dialog.html',
})
export class UserInfoDialog {
 
}
