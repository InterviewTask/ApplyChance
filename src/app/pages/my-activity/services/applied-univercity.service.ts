import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ApiService } from '@apply-chance/core';
import { IAppliedUniversity, ICountry, IDegree,  IMajor, IUniversitiy } from '../models';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppliedUnivercityService {
  constructor(private api: ApiService) { }

  getAppliedUniversityList(): Observable<IAppliedUniversity[]> {
    return this.api.get<IAppliedUniversity[]>
      ("AppliedUniversity")
  }
  deleteAppliedUniversity(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: { "id": id }
    };
    return this.api.delete<any>
      ("AppliedUniversity", httpOptions)
  }
  addAppliedUniversity(model: IAppliedUniversity): Observable<any> {
    return this.api.post<Observable<any>>
      ('AppliedUniversity', model);
  }
  editAppliedUniversity(model: IAppliedUniversity): Observable<any> {
    return this.api.put<Observable<any>>
      ('AppliedUniversity', model);
  }

  getCountriesList(): Observable<ICountry[]> {
    return this.api.get<ICountry[]>
      ("Country")
  }
  getDegreeList(): Observable<IDegree[]> {
    return this.api.get<IDegree[]>
      ("Degree")
  }
  getUniversitiyList(cuntryId: number | null): Observable<IUniversitiy[]> {
    if (!cuntryId) return of([]);

    return this.api.get<IUniversitiy[]>
      ("University/" + cuntryId)
  }
  getMajorList(): Observable<IMajor[]> {
    return this.api.get<IMajor[]>
      ("Major")
  }
}
