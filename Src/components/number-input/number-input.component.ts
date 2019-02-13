import { Component, OnInit, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberInputComponent),
    multi: true,
  }]
})
export class NumberInputComponent implements OnInit, ControlValueAccessor
{
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() precision: number;
  @Input() inputDisabled: boolean;
  @Input('value') _value: number = 0;

  constructor(private changeDetector: ChangeDetectorRef) { }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any)
  {
    this.onChange = fn;
  }

  registerOnTouched(fn: any)
  {
    this.onTouched = fn;
  }

  writeValue(val: any)
  {
    this._value = val;
    this.changeDetector.detectChanges();
  }

  setDisabledState(val: boolean)
  {
    if (this.inputDisabled == null)
    {
      this.inputDisabled = false;
    }
  }

  setTouched()
  {
    this.onTouched();
  }

  ngOnInit()
  {

  }

  private increaseValue(): void
  {
    this._value += 1;
    this.onChange(this._value);
  }

  private decreaseValue(): void
  {
    this._value -= 1;
    this.onChange(this._value);
  }

  get value()
  {
    return this._value;
  }

  set value(val)
  {
    this._value = val;
    this.onChange(val);
  }
}
