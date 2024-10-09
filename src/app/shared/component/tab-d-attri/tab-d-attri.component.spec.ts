import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDAttriComponent } from './tab-d-attri.component';

describe('TabDAttriComponent', () => {
  let component: TabDAttriComponent;
  let fixture: ComponentFixture<TabDAttriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDAttriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDAttriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
