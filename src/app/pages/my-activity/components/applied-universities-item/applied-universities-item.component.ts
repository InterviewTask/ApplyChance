import { Component, Input, OnInit } from '@angular/core';
import { IAppliedUniversity } from '../../models';

@Component({
  selector: 'applied-universities-item',
  templateUrl: './applied-universities-item.component.html',
  styleUrls: ['./applied-universities-item.component.scss']
})
export class AppliedUniversitiesItemComponent implements OnInit {
@Input('item')
item:IAppliedUniversity;

  constructor() { }

  ngOnInit() {
  }

}
