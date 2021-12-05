
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  Role, RoleState } from '../models';

@Injectable()
export class TabHandlerService {
   _activeRole = new BehaviorSubject<Role>(Role.APPLICANT);
   _activeState = new BehaviorSubject<RoleState>(RoleState.APPLIED_UNIVERSITIES);
  constructor() {}

  set activeRole(role: Role) {
    this._activeRole.next(role);
    this._activeState.next(RoleState.MENTORING_SESSIONS)
  }
  get activeRole() {
    return this._activeRole.value;
  }

  set activeState(state: RoleState) {
    this._activeState.next(state);
  }
  get activeState() {
    return this._activeState.value;
  }


}
