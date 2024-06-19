import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlighter]',
})
export class BasicHighLighterDirective implements OnInit {

    constructor(private elementRef:ElementRef) {   }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = '#d9ffff';
    }
 }
