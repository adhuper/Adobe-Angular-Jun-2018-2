import { Component } from '@angular/core';
import {CalculatorModel } from './calculatorModel';


@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	n1 : number = 0;
	n2 : number = 0;
	result : number = 0;
	model : CalculatorModel = new CalculatorModel();

	/*setN1(value){
		this.n1 = parseInt(value, 10);
	}

	setN2(value){
		this.n2 = parseInt(value, 10);
	}
	onAddClick(){
		this.result = this.model.add(this.n1 , this.n2);
	}
	onSubtractClick(){
		this.result = this.model.subtract(this.n1 , this.n2);
	}
	onMultiplyClick(){
		this.result = this.model.multiply(this.n1 , this.n2);
	}
	onDivideClick(){
		this.result = this.model.divide(this.n1 , this.n2);
	}*/
}