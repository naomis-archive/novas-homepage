import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasComponent } from './novas.component';

describe('NovasComponent', () => {
  let component: NovasComponent;
  let fixture: ComponentFixture<NovasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
