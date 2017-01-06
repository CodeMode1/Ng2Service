import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {
  private data: string[] = [];
  public pushData = new EventEmitter<string>();

  constructor(private logService: LogService){
  }

  addData(input: string){
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  getData(){
    return this.data;
  }

  pushDatas(value: string){
    this.pushData.emit(value);
  }

}
