import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import 'emoji-picker-element';
import { PickerDemo } from '../../picker-demo/picker-demo';

@Component({
  selector: 'app-element-picker',
  imports: [PickerDemo],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './element-picker.html',
  styleUrl: './element-picker.css',
})
export class ElementPickerPage {
  protected readonly text = signal('');

  protected onEmoji(event: Event) {
    const unicode = (event as CustomEvent<{ unicode?: string }>).detail.unicode;
    if (unicode) {
      this.text.update((value) => value + unicode);
    }
  }
}
