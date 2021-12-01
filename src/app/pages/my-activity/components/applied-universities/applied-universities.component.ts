import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AppliedUnivercityService } from '../../services';
import { ScoreWeightsComponent } from '../score-weights/score-weights.component';

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
    dialogConfig.autoFocus = true;
    this.dialog.open(ScoreWeightsComponent, dialogConfig);

  }

}
