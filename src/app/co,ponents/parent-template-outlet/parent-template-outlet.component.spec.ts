import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTemplateOutletComponent } from './parent-template-outlet.component';

describe('ParentTemplateOutletComponent', () => {
  let component: ParentTemplateOutletComponent;
  let fixture: ComponentFixture<ParentTemplateOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTemplateOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
