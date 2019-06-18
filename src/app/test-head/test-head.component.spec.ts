import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHeadComponent } from './test-head.component';

describe('TestHeadComponent', () => {
  let component: TestHeadComponent;
  let fixture: ComponentFixture<TestHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
