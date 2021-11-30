import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConfigurationPageComponent } from './report-configuration-page.component';

describe('ReportConfigurationPageComponent', () => {
  let component: ReportConfigurationPageComponent;
  let fixture: ComponentFixture<ReportConfigurationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConfigurationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportConfigurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
