import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTemplateOutletComponent } from './child-template-outlet.component';

describe('ChildTemplateOutletComponent', () => {
  let component: ChildTemplateOutletComponent;
  let fixture: ComponentFixture<ChildTemplateOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTemplateOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
