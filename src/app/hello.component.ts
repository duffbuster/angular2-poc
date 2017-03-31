import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

/**
 * Displays a hello world with some user information
 * @author Colin Mackey
 */
@Component({
  selector: 'fountain-app',
  template: require('./hello.html'),
  providers: [ UserService ]
})
export class HelloComponent implements OnInit {
  public hello: string;
  public user: Object;

  constructor(private userService: UserService) {
    this.hello = 'Hello World!';
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
    return _.includes(user.roles, r => r === 'admin');
  }
}
