import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-template-outlet',
  templateUrl: './child-template-outlet.component.html',
  styleUrls: ['./child-template-outlet.component.css']
})
export class ChildTemplateOutletComponent implements OnInit {
  @ContentChild(TemplateRef) parentTemplate;

  dataBase = [{
    name: 'John', age: 34
  }, {
    name: 'Mark', age: 42
  }, {
    name: 'Eugene', age: 45
  } ];
  constructor() { }

  ngOnInit() {
  }

}
