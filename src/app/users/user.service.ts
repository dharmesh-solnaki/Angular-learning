import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../Shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User(1, 'dharmesh', 120000, 'male', 21),
    new User(2, 'aksh', 10000, 'male', 21),
    new User(3, 'Joey', 120000, 'female', 24),
    new User(4, 'maya', 170000, 'female', 20),
  ];

  addUserevent = new EventEmitter<User[]>();
  getUserList() {
    return this.users.slice();
  }

  addUserToList(user: User) {
    this.users.push(user);
    console.log('user addded');
    this.addUserevent.emit(this.users.slice());
  }

  getCurrntCount(): number {
    return +this.users.length;
  }
}
