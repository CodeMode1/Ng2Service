import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
    moduleId: module.id,
    selector: 'si-cmp-b',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
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
export class CmpBComponent implements OnInit {
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
        /*The slice() method returns the selected elements in an array, as a new array object.
        The slice() method selects the elements starting at the given start argument, and ends at, 
        but does not include, the given end argument.
        If omitted, all elements from the start position and to the end of the array will be selected.
        Use negative numbers to select from the end of an array*/
        this.items = this.dataService.getData().slice(0);
    }

    onSend(value: string) {
   
    }

    ngOnInit(){
        this.dataService.pushData.subscribe(
            data => this.value = data
        );
    }
}
