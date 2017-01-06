import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesDiAppComponent } from './services-di.component';
import { ServiceComponent } from './service';
import { CmpAComponent, CmpBComponent, LogService} from './service';

@NgModule({
declarations: [ServicesDiAppComponent, CmpAComponent, CmpBComponent, ServiceComponent],
imports: [BrowserModule],
bootstrap: [ServicesDiAppComponent],
providers: [LogService]
})
export class AppModule {}
