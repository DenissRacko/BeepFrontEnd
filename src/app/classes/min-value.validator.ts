import { Directive, forwardRef, Attribute } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[minValue][formControlName],[minValue][formControl],[minValue][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => minValue), multi: true }
    ]
})

export class minValue implements Validator {

    constructor( @Attribute('minValue') public minValue: string) {
    }

    validate(c: AbstractControl): { [key: string]: any } {
        let v = c.value;
        let e = this.minValue;

        if (v < e) {
            console.log(c.errors);
            return {'min-exceed': true}
        }
        else {
            return null;
        }     
    }
}