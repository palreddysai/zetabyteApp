import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWatchListComponent } from './modify-watch-list.component';

describe('ModifyWatchListComponent', () => {
  let component: ModifyWatchListComponent;
  let fixture: ComponentFixture<ModifyWatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyWatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
