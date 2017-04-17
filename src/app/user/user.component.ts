import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <p>{{ user.name }}</p>
      <p *ngIf="isAdmin(user)">Some admin stuff here...</p>
    </div>
  `
})
export class UserComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) {
    this.user = { id: 0, name: '', roles: [] };
  }

  /**
   * Gets user information from the user service
   * @returns {void}
   */
  ngOnInit() {
    this.userService.getUser('Colin').then(user => this.user = user);
  }

  /**
   * Checks to see if the logged in user is an admin
   * @param {User} user - logged in user
   * @returns {boolean} returns true if admin, false if not
   */
  isAdmin(user: User): boolean {
    console.log(user.roles);
    return _.find(user.roles, r => r === 'admin');
  }
}
