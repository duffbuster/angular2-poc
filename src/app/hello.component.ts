import { Component } from '@angular/core';
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
export class HelloComponent {
  public hello: string;

  constructor(private userService: UserService) {
    this.hello = 'Hello World!';
  }
}
