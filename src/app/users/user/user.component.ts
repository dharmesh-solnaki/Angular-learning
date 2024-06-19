import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user = { id: this.route.snapshot.params['id'] ,
        name: this.route.snapshot.params['name']
    };

    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
    )
    
  }
}
