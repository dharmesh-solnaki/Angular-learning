import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../Shared/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',

})
export class UsersComponent {
users:User[]=[];
constructor(private userService: UserService) {
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.users = this.userService.getUserList();
  this.userService.addUserevent.subscribe((users:User[])=>{
    this.users = users
 });
}



addUserToList(){
  this.userService.addUserToList( new User(this.users.length+1,'new User',283783,'male',32));
}}
