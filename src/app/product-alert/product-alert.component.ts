import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
})
export class ProductAlertComponent {
  @Input() product: any;
  @Output() notify = new EventEmitter();

  onNotify() {
    this.notify.emit();
  }
}
