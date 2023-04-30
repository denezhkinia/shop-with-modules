import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[swmHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.background-color') backgroundColor = 'white';
  @HostListener('mouseenter')
  mouseover() {
    this.backgroundColor = '#99EDC3';
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.backgroundColor = 'white';
  }
}
