import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogResult } from '../../enums/dialog-result';

@Component({
  selector: 'app-DeleteDialog',
  templateUrl: './DeleteDialog.component.html',
  styleUrls: ['./DeleteDialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<DeleteDialogComponent>,
  ) { }

  ngOnInit() {
  }
  closeDialog()
  {
    this.dialogRef.close({Action:DialogResult.OK})
  }
}
