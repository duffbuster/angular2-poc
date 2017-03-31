import { User } from './user.model';

export const USERS: User[] = [
  { id: 1, name: 'Colin', roles: [ 'admin' ] },
  { id: 2, name: 'Andrew', roles: [ 'user' ] },
  { id: 3, name: 'Joe', roles: [ 'user', 'creator' ] }
];
