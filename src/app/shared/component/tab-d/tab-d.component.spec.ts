import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDComponent } from './tab-d.component';

describe('TabDComponent', () => {
  let component: TabDComponent;
  let fixture: ComponentFixture<TabDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
