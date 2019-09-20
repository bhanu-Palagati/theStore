import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItems = [];
  items: {name: string, cost: number, offer: number, finalPrice: number, count?: number}[] = [
    {
      name: 'this is product 1',
      cost: 1200,
      offer: 50,
      finalPrice: 600
    },
    {
      name: 'this is product 2',
      cost: 1200,
      offer: 50,
      finalPrice: 600
    },
    {
      name: 'this is product 3',
      cost: 1200,
      offer: 50,
      finalPrice: 600
    }
  ];

  onValueUpdate(event: {index: number, count: number}) {
    this.items[event.index]['count'] = event.count;
  }
  onCheckOut() {
    this.selectedItems = [];
    this.items.forEach(element => {
      if ( 'count' in element && element.count > 0) {
        this.selectedItems.push(element);
      }
    });
    console.log(this.selectedItems);
  }

}
