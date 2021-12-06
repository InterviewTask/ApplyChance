import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAppliedUniversity } from '../../models';

@Component({
  selector: 'applied-universities-item',
  templateUrl: './applied-universities-item.component.html',
  styleUrls: ['./applied-universities-item.component.scss']
})
export class AppliedUniversitiesItemComponent implements OnInit {
  @Input('item')
  item: IAppliedUniversity;
  @Output('delete')
  delete = new EventEmitter<number>();
  @Output('edit')
  edit = new EventEmitter<number>();

  DropDown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggelDropDown() {
    this.DropDown = !this.DropDown;
  }

  deleteItem() {
    this.toggelDropDown();
    this.delete.emit(this.item.id)
  }

  editItem() {
    this.toggelDropDown();
    this.edit.emit(this.item.id)
  }

}
