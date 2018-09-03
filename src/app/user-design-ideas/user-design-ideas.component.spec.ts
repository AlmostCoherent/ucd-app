import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDesignIdeasComponent } from './user-design-ideas.component';

describe('UserDesignIdeasComponent', () => {
  let component: UserDesignIdeasComponent;
  let fixture: ComponentFixture<UserDesignIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDesignIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDesignIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
