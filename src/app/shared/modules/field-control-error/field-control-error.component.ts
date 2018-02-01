import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-control-error',
  templateUrl: './field-control-error.component.html',
  styleUrls: ['./field-control-error.component.scss']
})
export class FieldControlErrorComponent implements OnInit {
  @Input() showError: boolean;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
