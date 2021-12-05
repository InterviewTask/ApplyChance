import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ApiService } from '@apply-chance/core';
import { IAppliedUniversity } from '../models';

@Injectable()
export class AppliedUnivercityService {
controller="AppliedUniversity"
constructor(private api:ApiService) { }

getList():Observable<IAppliedUniversity[]>{
  return this.api.get<IAppliedUniversity[]>
  (this.controller)
}
}
