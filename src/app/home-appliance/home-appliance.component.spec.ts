import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApplianceComponent } from './home-appliance.component';

describe('HomeApplianceComponent', () => {
  let component: HomeApplianceComponent;
  let fixture: ComponentFixture<HomeApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
