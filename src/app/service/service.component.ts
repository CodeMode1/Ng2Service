import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'si-service',
    template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,
  providers: [DataService]
})
export class ServiceComponent {

}
