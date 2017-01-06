import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
    moduleId: module.id,
    selector: 'si-cmp-a',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `
})
export class CmpAComponent {
    constructor(private logService: LogService, private dataService: DataService){
        
    }

    value = '';
    items: string[] = [];

    onLog(value: string) {
        this.logService.writeToLog(value);
    }
    onStore(value: string) {
        this.dataService.addData(value);
    }

    onGet() {
        //slice(0) creates a new array for each input typed in the text box
        //so click the refresh button each time to see the added data (new array)
        this.items = this.dataService.getData().slice(0);
    }

    onSend(value: string) {
        this.dataService.pushDatas(value);
    }
}
