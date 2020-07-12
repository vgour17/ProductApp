import { AbstractControl, ValidatorFn } from '@angular/forms';

import {} from '../model/app.product.model';

export class CustomValidator {
   static CheckEven(ctrl: AbstractControl): any {
     // tslint:disable-next-line: radix
     const value: number = parseInt(ctrl.value);
     if (value % 2 === 0) {
        return null; // valid
     } else {
       return {odd: true}; // invalid
     }
   }

   static IDExists(list:Array<string>, id:string) : ValidatorFn{
       return (ctrl : AbstractControl) : any =>  {
            if(list.indexOf(id) > -1)
                return {exists : true};
            else
                return null;
              
       }
   }

   static IsNegative(ctrl : AbstractControl) : any{
    const value: number = parseInt(ctrl.value);
    if (value <= 0) {
       return {isnegative : true};
    } else {
      return null;
    }
   } 
}