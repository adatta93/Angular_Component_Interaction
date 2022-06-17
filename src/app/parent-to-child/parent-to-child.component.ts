import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.less']
})
export class ParentToChildComponent implements OnInit {

  private state = new BehaviorSubject({
    enabled: false,
    toolTip: false
  });
  public eventStream$ = this.state.asObservable();

  constructor() { }

  ngOnInit() {
  }

  update(value, command) {
    let update = this.state.value;
    if (command == 'enabled') {
      update.enabled = value;
    }
    if (command == 'tooltip') {
      update.toolTip = value;
    }
    this.state.next(update);
  }

}
