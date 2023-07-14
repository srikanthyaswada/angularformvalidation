import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingsComponent } from './databindings.component';

describe('DatabindingsComponent', () => {
  let component: DatabindingsComponent;
  let fixture: ComponentFixture<DatabindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
