import { Input, Directive, ElementRef, Renderer, OnInit, EventEmitter } from '@angular/core';

@Directive({
  selector: '[defaultImage]'
})
export class DefaultImageDirective implements OnInit {
  @Input() defaultImage: string;

  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
      console.log(this.hostElement);

      if (this.hostElement.nativeElement instanceof HTMLImageElement) {
        const imgElement = this.hostElement.nativeElement as HTMLImageElement;

        if (imgElement.baseURI === imgElement.src) {
          imgElement.src = this.defaultImage;
        }
      }
  }
}
