import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
})
export class CommonGridComponent {
  @Input() columns: string[];
  @Input() data: any[];
  @Input() pipecolumns: string[]=[];
  @Input() hasActions:string[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  isPipeApplyOrNot(column: string) {
    return this.pipecolumns.includes(column);
  }
  doesHaveActions(column:string){
 return this.hasActions.includes(column);
  }
}
