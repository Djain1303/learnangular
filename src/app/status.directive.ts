import { Directive, Input, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input() appStatus: string;
  @Input() oneMore: string;

  ngOnInit() {
    if (this.appStatus === 'ok') {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
  }
}
