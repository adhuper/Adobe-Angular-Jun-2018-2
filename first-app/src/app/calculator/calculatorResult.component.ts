import { Component, Input } from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	template : `
		<div [ngClass]="{positive : result >= 0, negative : result < 0}">{{result}}</div>
	`,
	styleUrls : ['calculatorResult.component.css']
})
export class CalculatorResultComponent{

	@Input('data')
	result : number = 0;
}