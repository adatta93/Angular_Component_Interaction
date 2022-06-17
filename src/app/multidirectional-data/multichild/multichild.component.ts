import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-multichild',
  templateUrl: './multichild.component.html',
  styleUrls: ['./multichild.component.less']
})
export class MultichildComponent implements OnInit {

  @Input() loadTime;
  @Input() processStream$;
  @Output() processDone = new EventEmitter<string>();

  processState = new BehaviorSubject('');

  constructor() { }

  ngOnInit() {
    this.processState.subscribe(val => this.processDone.emit(val));
    this.processStream$ = this.processStream$.pipe(
      tap(val => {
        if (val == 'Running')
          this.start()
      })
    )
  }

  start() {
    this.processState.next('Loading..');
    setTimeout(_ => this.processState.next('Complete'), this.loadTime);
  }

  ngOnDestroy(){
    this.processState.unsubscribe();
  }

}
