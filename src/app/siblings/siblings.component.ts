import { Component, OnInit } from '@angular/core';
import { ToastService } from '../unrelated/toast.service';
import { SiblingsDirective } from './siblings.directive';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.less']
})
export class SiblingsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
