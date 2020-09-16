import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '0';
  displayValue = '';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
  }

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.displayValue += this.currentNumber;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
        this.displayValue += '+';
        return this.firstOperand += secondOp; 
      case '-': 
        this.displayValue += '-';
        return this.firstOperand -= secondOp; 
      case '*': 
        this.displayValue += 'x';
        return this.firstOperand *= secondOp; 
      case '/': 
        this.displayValue += '/';
        return this.firstOperand /= secondOp; 
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);
    }
    else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    if(op === '+'){
      this.displayValue = this.currentNumber + ' + ';      
    }
    else if (op === '-'){
      this.displayValue = this.currentNumber + ' - ';
    }
    else if (op === '*'){
      this.displayValue = this.currentNumber + '*';
    }
    else if (op === '/'){
      this.displayValue = this.currentNumber + ' / ';      
    }
    console.log(this.firstOperand);
 
  }

  public clear(){
    this.currentNumber = '0';
    this.displayValue = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
