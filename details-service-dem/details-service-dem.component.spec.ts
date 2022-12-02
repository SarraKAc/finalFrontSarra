import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsServiceDemComponent } from './details-service-dem.component';

describe('DetailsServiceDemComponent', () => {
  let component: DetailsServiceDemComponent;
  let fixture: ComponentFixture<DetailsServiceDemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsServiceDemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsServiceDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
