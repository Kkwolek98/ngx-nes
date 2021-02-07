import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNesComponent } from './ngx-nes.component';

describe('NgxNesComponent', () => {
  let component: NgxNesComponent;
  let fixture: ComponentFixture<NgxNesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
