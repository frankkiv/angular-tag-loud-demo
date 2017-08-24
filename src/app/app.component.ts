import { Component } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data: Array<CloudData> = [];
  options: CloudOptions = {
    width : 1,
    height : 700,
    overflow: false,
  };

  constructor(private _appService: AppService) {}

  ngOnInit(){
    this.data = this._appService.getCloudData();
  }

  newDateFromObservable(){
    const changedData$: Observable<Array<CloudData>> = Observable.of([
      { text: 'Weight-3', weight: 3 },
      { text: 'Weight-2', weight: 2 },
      { text: 'Weight-1', weight: 1 }
    ]);
    changedData$.subscribe(res => this.data = res);
  }

  log(eventType: string, e?: CloudData){
    console.log(eventType, e);
  }
}
