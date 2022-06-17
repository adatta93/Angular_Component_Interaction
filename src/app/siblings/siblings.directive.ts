import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../unrelated/toast.service';

@Directive({
  selector: '[appSibling]'
})
export class SiblingsDirective {

  private behaviorSubject = new BehaviorSubject('dodgerblue');
  public eventStream$ = this.behaviorSubject.asObservable();
  
  constructor(private ser: ToastService) {
    this.ser.enableStream$.subscribe(to => {
      this.behaviorSubject.next(to.color);
    });
  }

  updateColor(color) {
    this.behaviorSubject.next(color);
  }

}