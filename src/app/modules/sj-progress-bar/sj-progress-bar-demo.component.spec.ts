import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjProgressBarDemoComponent } from './sj-progress-bar-demo.component';

describe('SjProgressBarComponent', () => {
  let component: SjProgressBarDemoComponent;
  let fixture: ComponentFixture<SjProgressBarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SjProgressBarDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SjProgressBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
