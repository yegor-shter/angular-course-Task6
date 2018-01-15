import { Directive, ViewContainerRef, TemplateRef, Input, ViewRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private viewRef: ViewRef = null;
  @Input()
  set appUnless(value) {
    if (!value && this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
    if (value && !this.viewRef) {
      this.update();
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {

   }

   public update () {
     this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
   }

}
