import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appOnClickAway]'
})
export class OnClickAwayDirective {
  constructor(private el: ElementRef) { }

  @Output('appOnClickAway') clickAway = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.clickAway.emit();
    }
  }
}
