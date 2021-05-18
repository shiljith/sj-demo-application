import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjProgressBarComponent } from './sj-progress-bar.component';

describe('SjProgressBarComponent', () => {
  let component: SjProgressBarComponent;
  let fixture: ComponentFixture<SjProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SjProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SjProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
