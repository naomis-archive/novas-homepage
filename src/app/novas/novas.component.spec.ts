import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NovasComponent } from "./novas.component";
import { HttpClientModule } from "@angular/common/http";

describe("NovasComponent", () => {
  let component: NovasComponent;
  let fixture: ComponentFixture<NovasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovasComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NovasComponent);
    component = fixture.componentInstance;
    component.poses = ["beach.png", "bed.png"];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
