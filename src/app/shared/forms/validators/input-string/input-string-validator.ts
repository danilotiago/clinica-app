import { AbstractControl, ValidatorFn } from '@angular/forms';

export class InputStringValidator {
    
    /**
     * validates if an input has only blanks
     * 
     * @param control
     * 
     * @returns Object | null
     *  
     */
    static notContainOnlyBlanks(control: AbstractControl): { [key: string]: boolean } | null {
        if (! control.value.trim()) {
            return { onlyBlanks: true };
        }
        return null;
    }

    /**
     * validates if an input has starts with blanks
     * 
     * @param control
     * 
     * @returns Object | null
     *  
     */
    static startsWithBlanks(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value.charAt(0) === ' ') {
            return { startsWithBlanks: true };
        }
        return null;
    }

    /**
     * validates if a field has at least {qtdMinCharacteres} 
     * characters ignoring blanks
     * 
     * @param qtdMinCharacteres 
     */
    static minLengthIgnoringBlanks(qtdMinCharacteres: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if ((control.value.trim()).length < qtdMinCharacteres) {
                return { notMinlength: true };
            }
            return null;
        }
    }

    /**
     * validates if a field has a maximum of {qtdMinCharacteres} 
     * characters ignoring blanks
     * 
     * @param qtdMaxCharacteres 
     */
    static maxLengthIgnoringBlanks(qtdMaxCharacteres: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if ((control.value.trim()).length > qtdMaxCharacteres) {
                return { notMaxlength: true };
            }
            return null;
        }
    }
}
