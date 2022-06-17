import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private enableSubject = new BehaviorSubject({
    visible: false,
    color: '#1e90ff',
    msg: ''
  });
  public enableStream$ = this.enableSubject.asObservable();

  constructor() { }

  public setEnabled(msg = 'This is a Toast Message') {
    if (!this.enableSubject.value.visible) {
      this.enableSubject.value.visible = true;
      this.enableSubject.value.msg = msg;
      this.enableSubject.next(this.enableSubject.value);
      setTimeout(_ => {
        this.enableSubject.value.visible = false;
        this.enableSubject.value.msg = '';
        this.enableSubject.next(this.enableSubject.value);
      }, 2000);
    }
  }

  public changeColor(color){
    this.enableSubject.value.color = color;
    this.enableSubject.next(this.enableSubject.value);
  }
}
