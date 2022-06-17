import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultichildComponent } from './multichild.component';

describe('MultichildComponent', () => {
  let component: MultichildComponent;
  let fixture: ComponentFixture<MultichildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultichildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultichildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
