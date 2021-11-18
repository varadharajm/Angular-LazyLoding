import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDataComponent } from './good-data.component';

describe('GoodDataComponent', () => {
  let component: GoodDataComponent;
  let fixture: ComponentFixture<GoodDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
