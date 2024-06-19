import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'skyblue';

  constructor( private eleRef: ElementRef , private renderer: Renderer2) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'green');
  }

@HostBinding('style.backgroundColor') backgroundColor:string;

  
  @HostListener('mouseenter') mouseover(eventdata:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor=this.highlightColor
  }
   @HostListener('mouseleave') mouselesve(eventdata:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor=this.defaultColor
  }

}
