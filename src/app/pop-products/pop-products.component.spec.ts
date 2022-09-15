import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopProductsComponent } from './pop-products.component';

describe('PopProductsComponent', () => {
  let component: PopProductsComponent;
  let fixture: ComponentFixture<PopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
