import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialgovComponent } from './officialgov.component';

describe('OfficialgovComponent', () => {
  let component: OfficialgovComponent;
  let fixture: ComponentFixture<OfficialgovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialgovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialgovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
