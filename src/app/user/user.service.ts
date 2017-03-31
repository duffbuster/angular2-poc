import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user.model';

/**
 * @author Colin Mackey
 */
@Injectable()
export class UserService {
  /**
   * Gets information for a single user by name
   * @param {string} name - The name of the user
   * @returns {Promise} Returns a promise with the user's info
   */
  getUser(name: string): Promise<User> {
    return Promise.resolve(_.find(USERS, o => o.name === name));
  }
}
