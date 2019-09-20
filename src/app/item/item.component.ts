import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ItemComponent implements OnInit {
  @Input() index;
  @Input() item;
  @Output() countUpdated = new EventEmitter();
  count = 0;
  constructor() { }

  increment() {
    this.count++;
    this.countUpdated.emit({index: this.index, count: this.count});
  }
  decrement() {
    this.count--;
    this.countUpdated.emit({index: this.index, count: this.count});
  }

  ngOnInit() {
  }

}
