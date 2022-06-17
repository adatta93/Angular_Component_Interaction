import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ParentDirective } from '../parent.directive';
import { SiblingsDirective } from '../siblings.directive';
import { ToastService } from 'src/app/unrelated/toast.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.less']
})
export class ChildOneComponent implements OnInit {

  color$;

  constructor(public sibDir: SiblingsDirective,private toastService: ToastService) { }
  //constructor(public directive: ParentDirective) { }

  ngOnInit() {
    console.log('Creating child 1..');
    //this.color$ = this.directive.eventStream$;
    this.color$ = this.sibDir.eventStream$;
  }

  updateColor(val) {
    //this.directive.updateColor(val);
    this.sibDir.updateColor(val);
    this.toastService.changeColor(val);
    //this.directive.count();
  }

}
