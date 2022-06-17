import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidirectionalDataComponent } from './multidirectional-data.component';

describe('MultidirectionalDataComponent', () => {
  let component: MultidirectionalDataComponent;
  let fixture: ComponentFixture<MultidirectionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultidirectionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultidirectionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
