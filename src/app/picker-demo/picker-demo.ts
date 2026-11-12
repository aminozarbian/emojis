import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-picker-demo',
  templateUrl: './picker-demo.html',
  styleUrl: './picker-demo.css',
})
export class PickerDemo {
  readonly title = input<string>('');
  readonly packageName = input<string>('');
  readonly description = input<string>('');
  readonly text = model('');
}
