import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswichPComponent } from './ngswich-p.component';

describe('NgswichPComponent', () => {
  let component: NgswichPComponent;
  let fixture: ComponentFixture<NgswichPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswichPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswichPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
