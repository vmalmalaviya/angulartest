import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletebookdetailsComponent } from './completebookdetails.component';

describe('CompletebookdetailsComponent', () => {
  let component: CompletebookdetailsComponent;
  let fixture: ComponentFixture<CompletebookdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletebookdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletebookdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
