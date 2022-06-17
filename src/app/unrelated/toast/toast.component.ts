import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less']
})
export class ToastComponent implements OnInit {

  toastStream$;
  color$;

  constructor(private toastService: ToastService) {
    this.toastStream$ = this.toastService.enableStream$;
  }

  ngOnInit() {
    
  }

}
