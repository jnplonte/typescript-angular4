import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[bgCheck]',
  host: {
    '(focus)' : 'onFocus()',
    '(blur)' : 'onBlur()'
  }
})

export class BgcheckDirective {
  onFocus(){
    this.render.setElementStyle(this.el.nativeElement, 'background', 'red')
  }

  onBlur(){
    this.render.setElementStyle(this.el.nativeElement, 'background', 'white')
  }

  constructor(private el: ElementRef, private render: Renderer) {

  }
}
