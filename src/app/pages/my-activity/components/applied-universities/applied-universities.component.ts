import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AppliedUnivercityService } from '../../services';
import { AppliedUnivercityDialogComponent } from '../applied-univercity-dialog/applied-univercity-dialog.component';


@Component({
  selector: 'my-activity-applied-universities',
  templateUrl: './applied-universities.component.html',
  styleUrls: ['./applied-universities.component.scss']
})
export class AppliedUniversitiesComponent implements OnInit {

  constructor(
    private appliedUnivercityService: AppliedUnivercityService,
    private dialog: MatDialog

  ) { }

  ngOnInit() {
  }

  openDialog() {
    console.log("openDialog");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height="80vh"
    this.dialog.open(AppliedUnivercityDialogComponent, dialogConfig);

  }

}
