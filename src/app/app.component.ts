import { Component, OnInit } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
   model: Todo;
ngOnInit() {
  
}

}
