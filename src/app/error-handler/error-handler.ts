import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  imports: [],
  templateUrl: './error-handler.html',
  styleUrl: './error-handler.css',
})
export class ErrorHandler {
@Input() errorMsg! : string
@Input() errorCode! : number
    ngOnInit(){

       const code=Math.floor(this.errorCode/100)
       switch(code){
         case 1:
          this.errorMsg="Your request is being processed.Please wait.."
          break;
        case 2:
          this.errorMsg="Request successfull.Data loaded properly"
          break;
        case 3:
          this.errorMsg="You are being redirected.Please wait.."
          break;
        case 4:
          this.errorMsg="There was an issue with your request.Please check and try again"
          break;
        case 5:
          this.errorMsg="Something went wrong on our side.Please try again later"
          break;
        default:
          this.errorMsg="Cannot recognize"
          break;
      }
    }
}
