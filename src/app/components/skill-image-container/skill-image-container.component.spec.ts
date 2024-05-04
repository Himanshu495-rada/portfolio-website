import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillImageContainerComponent } from './skill-image-container.component';

describe('SkillImageContainerComponent', () => {
  let component: SkillImageContainerComponent;
  let fixture: ComponentFixture<SkillImageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillImageContainerComponent]
    });
    fixture = TestBed.createComponent(SkillImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
