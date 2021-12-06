
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { IAppliedUniversity, ICountry, IDegree, IMajor, IUniversitiy } from '../../models';
import { AppliedUnivercityService } from '../../services';

@Component({
  selector: 'app-applied-univercity-dialog',
  templateUrl: './applied-univercity-dialog.component.html',
  styleUrls: ['./applied-univercity-dialog.component.scss']
})
export class AppliedUnivercityDialogComponent implements OnInit {
  form: FormGroup;
  countries: ICountry[] = [];
  universities: IUniversitiy[] = [];
  majors: IMajor[] = [];
  degree: IDegree[] = [];
  formDataLoaded: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private injectData: IAppliedUniversity | null,
    private dialogRef: MatDialogRef<AppliedUnivercityDialogComponent>,
    private appliedUnivercityService: AppliedUnivercityService,
    private formbuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.createForm(this.injectData);
    this.preperDropdown();
  }

  createForm(item: IAppliedUniversity | null) {
    this.form = this.formbuilder.group({
      id:               [item ? item.id : null, []],
      university:       [item ? item.university : '', []],
      universityId:     [item ? item.universityId : null, []],
      country:          [item ? item.country : '', []],
      countryId:        [item ? item.countryId : null, []],
      degree:           [item ? item.degree : '', []],
      degreeId:         [item ? item.degreeId : null, []],
      major:            [item ? item.major : '', []],
      majorId:          [item ? item.majorId : null, []],
      acSCore:          [item ? item.acSCore : 50, []],
      applicationDate:  [item ? item.applicationDate : '', []],
      responseDate:     [item ? item.responseDate : '', []],
      found:            [item ? item.found : 0, []],
      foundType:        [item ? item.found + '' : '0', []],
      status:           [item ? item.status + '' : '1', []],
      applicationProof: [item ? item.applicationProof : null, []],
      resultProof:      [item ? item.resultProof : null, []],
    })
  }

  preperDropdown() {
    forkJoin([
      this.appliedUnivercityService.getCountriesList(),
      this.appliedUnivercityService.getUniversitiyList(this.form.get('countryId').value),
      this.appliedUnivercityService.getMajorList(),
      this.appliedUnivercityService.getDegreeList()
    ]).subscribe(res => {
      this.countries = res[0];
      this.universities = res[1];
      this.majors = res[2];
      this.degree = res[3];
      this.formDataLoaded = true;
    })
  }


  getUniversityList() {
    this.appliedUnivercityService.getUniversitiyList(this.form.get('countryId').value as number).subscribe(res => this.universities = res)
  }

  onsubmit() {
    if (this.form.invalid) return;

    if (!this.form.get('id').value) {
      this.appliedUnivercityService.addAppliedUniversity(this.form.value).subscribe(res => {
        this.dialogRef.close();
      })
    } else {
      this.appliedUnivercityService.editAppliedUniversity(this.form.value).subscribe(res => {
        this.dialogRef.close();
      })
    }

  }



}
