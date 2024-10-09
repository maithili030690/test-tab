import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSwitchNgforComponent } from './tab-switch-ngfor.component';

describe('TabSwitchNgforComponent', () => {
  let component: TabSwitchNgforComponent;
  let fixture: ComponentFixture<TabSwitchNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSwitchNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSwitchNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
