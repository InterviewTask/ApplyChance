import { Component, OnInit } from '@angular/core';
import { AppliedUnivercityService } from '../../services';

@Component({
  selector: 'my-activity-applied-universities',
  templateUrl: './applied-universities.component.html',
  styleUrls: ['./applied-universities.component.scss']
})
export class AppliedUniversitiesComponent implements OnInit {

  constructor(appliedUnivercityService:AppliedUnivercityService) { }

  ngOnInit() {
  }

}
