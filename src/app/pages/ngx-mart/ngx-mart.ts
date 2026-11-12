import { Component, signal } from '@angular/core';
import { PickerComponent } from 'ngx-emoji-mart-next';
import type { EmojiEvent } from 'ngx-emoji-mart-next/ngx-emoji';
import { PickerDemo } from '../../picker-demo/picker-demo';

@Component({
  selector: 'app-ngx-mart',
  imports: [PickerDemo, PickerComponent],
  templateUrl: './ngx-mart.html',
  styleUrl: './ngx-mart.css',
})
export class NgxMartPage {
  protected readonly text = signal('');

  protected addEmoji(event: EmojiEvent) {
    const native = event.emoji.native;
    if (native) {
      this.text.update((value) => value + native);
    }
  }
}
