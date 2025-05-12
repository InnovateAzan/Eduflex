import * as lpn from 'google-libphonenumber';
/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export const phoneNumberValidator = (control) => {
    if (!control.value) {
        return;
    }
    // Find <input> inside injected nativeElement and get its "id".
    const el = control.nativeElement;
    const inputBox = el
        ? el.querySelector('input[type="tel"]')
        : undefined;
    if (inputBox) {
        const id = inputBox.id;
        const isCheckValidation = inputBox.getAttribute('validation');
        if (isCheckValidation === 'true') {
            const isRequired = control.errors && control.errors.required === true;
            const error = { validatePhoneNumber: { valid: false } };
            inputBox.setCustomValidity('Invalid field.');
            let number;
            try {
                number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            }
            catch (e) {
                if (isRequired) {
                    return error;
                }
                else {
                    inputBox.setCustomValidity('');
                }
            }
            if (control.value) {
                // @ts-ignore
                if (!number) {
                    return error;
                }
                else {
                    if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
            }
        }
        else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
        }
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUU3Qzs7Ozs7Ozs7RUFRRTtBQUNGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBWSxFQUFFLEVBQUU7SUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDbkIsT0FBTztLQUNQO0lBQ0QsK0RBQStEO0lBQy9ELE1BQU0sRUFBRSxHQUFnQixPQUFPLENBQUMsYUFBNEIsQ0FBQztJQUM3RCxNQUFNLFFBQVEsR0FBMkIsRUFBRTtRQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUN2QyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2IsSUFBSSxRQUFRLEVBQUU7UUFDYixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLGlCQUFpQixLQUFLLE1BQU0sRUFBRTtZQUNqQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztZQUN0RSxNQUFNLEtBQUssR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFFeEQsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFN0MsSUFBSSxNQUF1QixDQUFDO1lBRTVCLElBQUk7Z0JBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3pCLENBQUM7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLElBQUksVUFBVSxFQUFFO29CQUNmLE9BQU8sS0FBSyxDQUFDO2lCQUNiO3FCQUFNO29CQUNOLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDL0I7YUFDRDtZQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDbEIsYUFBYTtnQkFDVCxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNoQixPQUFPLEtBQUssQ0FBQztpQkFDYjtxQkFBTTtvQkFDTixJQUNDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FDeEQsTUFBTSxFQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUN6QixFQUNBO3dCQUNELE9BQU8sS0FBSyxDQUFDO3FCQUNiO3lCQUFNO3dCQUNOLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDL0I7aUJBQ0Q7YUFDRDtTQUNEO2FBQU0sSUFBSSxpQkFBaUIsS0FBSyxPQUFPLEVBQUU7WUFDekMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRS9CLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtLQUNEO0lBQ0QsT0FBTztBQUNSLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG4vKlxuV2UgdXNlIFwiY29udHJvbDogYW55XCIgaW5zdGVhZCBvZiBcImNvbnRyb2w6IEZvcm1Db250cm9sXCIgdG8gc2lsZW5jZTpcblwiUHJvcGVydHkgJ25hdGl2ZUVsZW1lbnQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0Zvcm1Db250cm9sJ1wiLlxuVGhpcyBoYXBwZW5zIGJlY2F1c2UgSSd2ZSBleHBhbmRlZCBjb250cm9sIHdpdGggbmF0aXZlRWxlbWVudCB2aWFcbidOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUnIHRvIGdldCBhbiBhY2Nlc3MgdG8gdGhlIGVsZW1lbnQuXG5Nb3JlIGFib3V0IHRoaXMgYXBwcm9hY2ggYW5kIHJlYXNvbnMgZm9yIHRoaXM6XG5odHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODAyNVxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcbiovXG5leHBvcnQgY29uc3QgcGhvbmVOdW1iZXJWYWxpZGF0b3IgPSAoY29udHJvbDogYW55KSA9PiB7XG5cdGlmICghY29udHJvbC52YWx1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBGaW5kIDxpbnB1dD4gaW5zaWRlIGluamVjdGVkIG5hdGl2ZUVsZW1lbnQgYW5kIGdldCBpdHMgXCJpZFwiLlxuXHRjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBjb250cm9sLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cdGNvbnN0IGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50IHwgYW55ID0gZWxcblx0XHQ/IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKVxuXHRcdDogdW5kZWZpbmVkO1xuXHRpZiAoaW5wdXRCb3gpIHtcblx0XHRjb25zdCBpZCA9IGlucHV0Qm94LmlkO1xuXHRcdGNvbnN0IGlzQ2hlY2tWYWxpZGF0aW9uID0gaW5wdXRCb3guZ2V0QXR0cmlidXRlKCd2YWxpZGF0aW9uJyk7XG5cdFx0aWYgKGlzQ2hlY2tWYWxpZGF0aW9uID09PSAndHJ1ZScpIHtcblx0XHRcdGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZCA9PT0gdHJ1ZTtcblx0XHRcdGNvbnN0IGVycm9yID0geyB2YWxpZGF0ZVBob25lTnVtYmVyOiB7IHZhbGlkOiBmYWxzZSB9IH07XG5cblx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCdJbnZhbGlkIGZpZWxkLicpO1xuXG5cdFx0XHRsZXQgbnVtYmVyOiBscG4uUGhvbmVOdW1iZXI7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdG51bWJlciA9IGxwbi5QaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5wYXJzZShcblx0XHRcdFx0XHRjb250cm9sLnZhbHVlLm51bWJlcixcblx0XHRcdFx0XHRjb250cm9sLnZhbHVlLmNvdW50cnlDb2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGlmIChpc1JlcXVpcmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29udHJvbC52YWx1ZSkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghbnVtYmVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdCFscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcblx0XHRcdFx0XHRcdFx0bnVtYmVyLFxuXHRcdFx0XHRcdFx0XHRjb250cm9sLnZhbHVlLmNvdW50cnlDb2RlXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGlzQ2hlY2tWYWxpZGF0aW9uID09PSAnZmFsc2UnKSB7XG5cdFx0XHRpbnB1dEJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cblx0XHRcdGNvbnRyb2wuY2xlYXJWYWxpZGF0b3JzKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybjtcbn07XG4iXX0=