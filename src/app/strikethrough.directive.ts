import { HostListener } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  private textDeco(action:string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){ 
    this.textDeco("line-through") 
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("none")
  }

}
