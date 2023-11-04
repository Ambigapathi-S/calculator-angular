import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-calculator';
  calcValue: number = 0;
  funcT: any = 'No Function';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;
  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calcValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (val == 'c') {
      this.clearAll();
    } else if (this.funcT == 'No Function') {
      this.firstNumber = this.calcValue;
      this.calcValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'No Function') {
      this.secondNumber = this.calcValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
      
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
    }

    if (this.funcT == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, val);
    }

    if (this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, val);
    }

    if (this.funcT == '%') {
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(Total, val);
    }
  }

  totalAssignValues(Total: number, val: string) {
    this.calcValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') {
      this.onEqualPress();
    }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calcValue = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
  }
}
