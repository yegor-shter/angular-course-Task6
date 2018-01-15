import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UnlessDirective } from './directives/unless.directive';
import { ParentTemplateOutletComponent } from './co,ponents/parent-template-outlet/parent-template-outlet.component';
import { ChildTemplateOutletComponent } from './co,ponents/child-template-outlet/child-template-outlet.component';
import { TooltipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    ParentTemplateOutletComponent,
    ChildTemplateOutletComponent,
    TooltipDirective

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
