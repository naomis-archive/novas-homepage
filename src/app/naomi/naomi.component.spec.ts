import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeTestingModule } from "@fortawesome/angular-fontawesome/testing";
import { SocialComponent } from "../social/social.component";

import { NaomiComponent } from "./naomi.component";

describe("NaomiComponent", () => {
  let component: NaomiComponent;
  let fixture: ComponentFixture<NaomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaomiComponent, SocialComponent],
      imports: [FontAwesomeTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NaomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
