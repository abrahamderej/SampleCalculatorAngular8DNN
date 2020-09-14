
import { Component } from '@angular/core';
import { DemoService } from '../Service/demo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Context } from '../Service/DNN/context.service';
import { take, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'calculator';
  public num1:number;
  public num2:number;
  public result:number;
  webapiResult = '';

  constructor(public context: Context, private _demoService: DemoService) {
    context.autoConfigure();
}

private getDataFromWebAPI() {
    this._demoService.getStagingOutputList().subscribe(data => {
      this.webapiResult = data;
      console.log('​---------------------------------');
      console.log('Call webapi data -> data: ', data);
      console.log('​---------------------------------');
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('​---------------------------------');
          console.log('Call webapi error -> ERROR: ', err.error);
          console.log('​---------------------------------');
        } else {
          console.log('​---------------------------------');
          console.log('Call webapi error -> ERROR: ', err.error);
          console.log('​---------------------------------');
        }
      }
    );
  }
 log(par: any): string{
    return JSON.stringify(par).toString();
  }

   add() {
    this.result = this.num1 + this.num2;
    
  }

}