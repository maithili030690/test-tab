import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgforComponent } from './tab-ngfor.component';

describe('TabNgforComponent', () => {
  let component: TabNgforComponent;
  let fixture: ComponentFixture<TabNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
