import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components';
import { DialogResult } from 'src/app/shared/enums/dialog-result';
import { IAppliedUniversity } from '../../models';

import { AppliedUnivercityService } from '../../services';
import { AppliedUnivercityDialogComponent } from '../applied-univercity-dialog/applied-univercity-dialog.component';


@Component({
  selector: 'my-activity-applied-universities',
  templateUrl: './applied-universities.component.html',
  styleUrls: ['./applied-universities.component.scss']
})
export class AppliedUniversitiesComponent implements OnInit {
  appliedUniversityList: IAppliedUniversity[] = []
  constructor(
    private appliedUnivercityService: AppliedUnivercityService,
    private dialog: MatDialog

  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.appliedUnivercityService.getAppliedUniversityList().subscribe(res => {
      this.appliedUniversityList = res;

    })
  }
  openDialog(data?:IAppliedUniversity) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "80vh";
    dialogConfig.width = "50%";
    dialogConfig.data=data;
    let dialog=this.dialog.open(AppliedUnivercityDialogComponent, dialogConfig);
    dialog.afterClosed().subscribe(()=>this.getList())

  }

  deleteItem(id: number) {
    let DialogRef = this.dialog.open(DeleteDialogComponent, {
			width: '30%'
		});
		//---------------------------------------------------------------
		DialogRef.afterClosed().subscribe((res) => {
			if (res.Action == DialogResult.OK) {
        this.appliedUnivercityService.deleteAppliedUniversity(id).subscribe(res=>{
          this.getList();
        })
			}
		});

   }


}
