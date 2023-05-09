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
    component.poses = [
      {
        fileName: "beach.png",
        name: "Beach Trip",
        alt: "Naomi, Rosalia, and Becca in their swimwear, relaxing together on a large beach towel.",
        description: "A nice, relaxing getaway from their busy lives.",
      },
      {
        fileName: "bed.png",
        name: "Sleepover",
        alt: "Naomi, Rosalia, and Becca relaxing on their bed together.",
        description:
          "They like to have sleepovers and catch up on what's going on in their lives.",
      },
    ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
