import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  @Input('eventStream') eventStream$;

  constructor() { }

  ngOnInit() {
  }

  getMessage(isEnabled) {
    if (isEnabled) {
      return 'Already Agreed';
    }
    return 'Click to Agree to the Terms';
  }

}
