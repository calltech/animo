import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the three initial items', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('#list').length).toBe(3);
    expect(compiled.textContent).toContain('Hey this is an item');
  });

  it('should add and remove an item when the buttons are clicked', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');

    buttons[0].click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(compiled.querySelectorAll('#list').length).toBe(4);

    buttons[1].click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(compiled.querySelectorAll('#list').length).toBe(3);
  });
});
