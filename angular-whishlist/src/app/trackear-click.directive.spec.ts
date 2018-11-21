import { TrackearClickDirective } from './trackear-click.directive';
import { ElementRef } from '@angular/core';

describe('TrackearClickDirective', () => {
  it('should create an instance', () => {
    const directive = new TrackearClickDirective(new ElementRef({}));
    expect(directive).toBeTruthy();
  });
});
