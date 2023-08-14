import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { v4 as uuidv4 } from "uuid";
import { mask } from 'src/app/utils/masks';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInput implements OnInit {
  id: string = '';
  active: boolean = false;
  displayPassword: boolean = false;
  displayCalendar: boolean = false;

  @Input() value?: any;
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() ariaLabel?: string;
  @Input() icon?: string;
  @Input() name?: string;
  @Input() error?: string;
  @Input() disabled?: boolean;
  @Input() calendar?: any;
  @Input() label?: string;
  @Input() optional?: boolean;
  @Input() maxLength?: number;
  @Input() readonly?: boolean;
  @Output() outputValue: EventEmitter<any> = new EventEmitter();
  @Output() outputIcon: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.setId();
    this.setIcon();
  };

  getId(): string {
    return this.id;
  };

  setValue(value: any): void {
    this.value = value;
  };

  setId(): void {
    this.id = uuidv4();
  };

  setActive(status: boolean): void {
    this.active = status;
  };

  setDisplayCalendar(): void {
    const inputDateElement: any = document.getElementById(this.id);
    inputDateElement.showPicker();
  };

  setDisplayPassword(): void {
    if (!this.displayPassword) {
      this.displayPassword = true;
      this.type = 'text';
    }
    else {
      this.displayPassword = false;
      this.type = 'password';
    };
  };

  setIcon(): void {
    if (this.type == 'date')
      this.icon = 'today';
    else if (this.type == 'password' && !this.displayPassword)
      this.icon = 'visibility_off';
    else if (this.displayPassword)
      this.icon = 'visibility';
  };

  iconHandle(): void {
    if (this.type == 'password' || this.displayPassword) this.setDisplayPassword();
    if (this.type == 'date') this.setDisplayCalendar();
    this.setIcon();
    this.outputIcon.emit(this.value);
  };

  inputEvent(input: Event): void {
    console.log('ebaa')
    let inputValue = (input.target as HTMLInputElement).value;

    if (inputValue) this.setActive(true);
    else this.setActive(false);

    if (this.type == 'checkbox') this.setValue(!this.value);
    else if (this.type == 'date') {
      if (inputValue.length < this.value.length) return this.setValue('');
      inputValue = this.formatDate(inputValue);
    };
    this.setValue(inputValue);
    this.outputValue.emit(this.value);
  };

  // private inputCalendar = (value: Date): void => {
  //   let date = moment(value).format("DD/MM/YYYY");
  //   this.inputEvent(date);
  // };

  formatDate(date: string): string {
    date = mask.date(date);
    return date;
  };
}
