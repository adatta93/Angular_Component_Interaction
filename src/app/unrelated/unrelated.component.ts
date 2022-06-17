import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-unrelated',
  templateUrl: './unrelated.component.html',
  styleUrls: ['./unrelated.component.less']
})
export class UnrelatedComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  onActiveClick(){
    this.toastService.setEnabled();
  }

}
