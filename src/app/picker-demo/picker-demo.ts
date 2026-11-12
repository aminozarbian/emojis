import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-picker-demo',
  templateUrl: './picker-demo.html',
  styleUrl: './picker-demo.css',
})
export class PickerDemo {
  readonly title = input.required<string>();
  readonly packageName = input.required<string>();
  readonly description = input.required<string>();
  readonly text = model('');
}
