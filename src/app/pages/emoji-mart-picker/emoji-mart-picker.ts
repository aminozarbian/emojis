import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Picker, SearchIndex } from 'emoji-mart';
import { PickerDemo } from '../../picker-demo/picker-demo';
import {
  defaultMartOptions,
  loadMartData,
  MartOptions,
  optionFields,
  parseOptionValue,
  spritesheetUrl,
} from './emoji-mart-options';

type MartData = Record<string, unknown>;

let sessionData: MartData | null = null;

@Component({
  selector: 'app-emoji-mart',
  imports: [PickerDemo],
  templateUrl: './emoji-mart-picker.html',
  styleUrl: './emoji-mart-picker.css',
})
export class EmojiMartPage {
  private readonly host = viewChild.required<ElementRef<HTMLElement>>('host');
  private picker?: HTMLElement;
  private mountSeq = 0;

  protected readonly text = signal('');
  protected readonly options = signal<MartOptions>({ ...defaultMartOptions });
  protected readonly fields = optionFields;

  constructor() {
    afterNextRender(() => void this.mountPicker());
    inject(DestroyRef).onDestroy(() => this.picker?.remove());
  }

  protected stringValue(key: keyof MartOptions): string {
    return String(this.options()[key]);
  }

  protected onFieldChange(key: keyof MartOptions, raw: string) {
    this.options.update((current) => ({
      ...current,
      [key]: parseOptionValue(key, raw),
    }));
    void this.mountPicker();
  }

  protected reset() {
    this.options.set({ ...defaultMartOptions });
    void this.mountPicker();
  }

  private async mountPicker() {
    const seq = ++this.mountSeq;
    const opts = this.options();
    const json = await loadMartData(opts.set, opts.emojiVersion);
    if (seq !== this.mountSeq) {
      return;
    }

    const data = hydrateMartData(json);
    this.picker?.remove();

    const picker = new Picker({
      ...(data ? { data } : {}),
      ...opts,
      getSpritesheetURL: spritesheetUrl,
      onEmojiSelect: (emoji: { native?: string }) => {
        if (emoji.native) {
          this.text.update((value) => value + emoji.native);
        }
      },
    }) as unknown as HTMLElement;

    this.host().nativeElement.appendChild(picker);
    this.picker = picker;
  }
}

function hydrateMartData(json: MartData): MartData | undefined {
  if (!sessionData) {
    sessionData = json;
    return sessionData;
  }

  for (const key of Object.keys(sessionData)) {
    delete sessionData[key];
  }
  Object.assign(sessionData, json, {
    emoticons: {},
    natives: {},
  });
  SearchIndex.reset();
  return undefined;
}
