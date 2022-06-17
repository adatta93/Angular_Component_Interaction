import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../unrelated/toast.service';

@Component({
  selector: 'app-multidirectional-data',
  templateUrl: './multidirectional-data.component.html',
  styleUrls: ['./multidirectional-data.component.less']
})
export class MultidirectionalDataComponent implements OnInit {

  private counter = 0;
  private processState = new BehaviorSubject('Off');
  public processStream$ = this.processState.asObservable();

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  getProcessState() {
    return this.processState.value;
  }

  onStartProcess() {
    this.processState.next('Running')
  }

  updateStatus(val) {
    if (val == 'Complete') {
      this.processState.next('First Process Complete');
      this.counter++;
    }
    if (this.counter == 2) {
      this.processState.next('Both Processes Complete');
      this.counter++;
      this.toastService.setEnabled('Both Processes Complete');
    }
  }

}
