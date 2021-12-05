import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IAppliedUniversity } from '../../models';

import { AppliedUnivercityService } from '../../services';
import { AppliedUnivercityDialogComponent } from '../applied-univercity-dialog/applied-univercity-dialog.component';


@Component({
  selector: 'my-activity-applied-universities',
  templateUrl: './applied-universities.component.html',
  styleUrls: ['./applied-universities.component.scss']
})
export class AppliedUniversitiesComponent implements OnInit {
  appliedUniversityList:IAppliedUniversity[]=[]
  constructor(
    private appliedUnivercityService: AppliedUnivercityService,
    private dialog: MatDialog

  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.appliedUnivercityService.getList().subscribe(res=>{
      this.appliedUniversityList=res;

    })
  }
  openDialog() {
    console.log("openDialog");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height="80vh"
    this.dialog.open(AppliedUnivercityDialogComponent, dialogConfig);

  }

}
