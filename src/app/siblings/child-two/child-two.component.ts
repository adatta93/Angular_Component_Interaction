import { Component, OnInit } from '@angular/core';
import { SiblingsDirective } from '../siblings.directive';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.less']
})
export class ChildTwoComponent implements OnInit {

  color$;

  constructor(public sibDir: SiblingsDirective) { }

  ngOnInit() {
    console.log('Creating child 2..');
    this.color$ = this.sibDir.eventStream$;
  }

}
