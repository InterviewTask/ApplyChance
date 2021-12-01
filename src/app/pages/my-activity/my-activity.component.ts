import { RoleState } from './models/role-state.enum';
import { TabHandlerService } from './services/tab-handler.service';
import { Component, OnInit } from '@angular/core';
import {  Role } from './models';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.scss']
})
export class MyActivityComponent implements OnInit {
  role = Role;
  state=RoleState;
  activeRole: Role ;
  activeState: RoleState;

  constructor(private tabHandler: TabHandlerService) {
  }

  ngOnInit() {
    this.tabState()
  }

  setRole(role: Role) {
    this.tabHandler.activeRole = role;

  }
  setStateRole(stateRole: RoleState) {
    this.tabHandler.activeState = stateRole;
  }
  tabState(){
    this.tabHandler._activeRole.subscribe(activeRole=>this.activeRole=activeRole)
    this.tabHandler._activeState.subscribe(activeState=>this.activeState=activeState)
  }




}
