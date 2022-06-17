import { Directive } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Directive({
  selector: '[appParent]',
  exportAs: 'parent'
})
export class ParentDirective {

  private behaviorSubject = new BehaviorSubject('#1e90ff');
  private counter = new BehaviorSubject([1]);
  public counter$ = this.counter.asObservable(); 
  public eventStream$ = this.behaviorSubject.asObservable(); 
  constructor() { }



  updateColor(color) {
    this.behaviorSubject.next(color);
  }

  count() {
    const next = Array(this.counter.getValue().length + 1).fill(0).map((x,i)=>i)
    this.counter.next(next);
  }

}