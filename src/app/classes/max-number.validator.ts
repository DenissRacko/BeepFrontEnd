import { Directive, forwardRef, Attribute } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[maxValue][formControlName],[maxValue][formControl],[maxValue][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => maxValue), multi: true }
    ]
})

export class maxValue implements Validator {

    constructor( @Attribute('maxValue') public maxValue: string) {
    }

    validate(c: AbstractControl): { [key: string]: any } {
        let v = c.value;
        let e = this.maxValue;

        if (v > e) {
            console.log(c.errors);
            return {'max-exceed': true}
        }
        else {
            return null;
        }  
    }
}