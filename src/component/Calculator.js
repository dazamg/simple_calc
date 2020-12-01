import React, { Component } from "react"

class Calculator extends Component {
    state = {
        count: 0,
        num1: 0,
        num2: 0,
        sub1: 0,
        sub2: 0,
        mult1: 0,
        mult2: 0
    }





    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    sumAddition = () => {
        const additionTotal = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({
            num1: 0,
            num2: 0,
            total: additionTotal
        })
    }

    sumSubstraction = () => {
        const substractionTotal = parseInt(this.state.sub1) - parseInt(this.state.sub2)
        this.setState({
            sub1: 0,
            sub2: 0,
            subTotal: substractionTotal
        })
    }

    sumMultiplication = () => {
        const MultiplicationTotal = parseInt(this.state.mult1) * parseInt(this.state.mult2)
        this.setState({
            mult1: 0,
            mult2: 0,
            multTotal: MultiplicationTotal
        })
    }

    render() {
        return (
            <div className="container">
            <h1>Add with React!</h1>
          
            <div className="add">
                
                
                <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                />
                <span>+</span>
                <input type="number"
                    name="num2"
                    placeholder="Enter your first number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                />
                <button onClick={this.sumAddition}>=</button>
                <h3>Addition results go here!</h3>
                <p>{this.state.total}</p>
            </div>
            <div className="substraction">
                
                
                <input type="number"
                    name="sub1"
                    placeholder="Enter your first number"
                    value={this.state.sub1}
                    onChange={ (e) => this.setNum(e, 'sub1') }
                />
                <span>-</span>
                <input type="number"
                    name="sub2"
                    placeholder="Enter your first number"
                    value={this.state.sub2}
                    onChange={ (e) => this.setNum(e, 'sub2') }
                />
                <button onClick={this.sumSubstraction}>=</button>
                <h3>Substraction results go here!</h3>
                <p>{this.state.subTotal}</p>
            </div>

            <div className="Multiplication">
                
                
                <input type="number"
                    name="mult1"
                    placeholder="Enter your first number"
                    value={this.state.mult1}
                    onChange={ (e) => this.setNum(e, 'mult1') }
                />
                <span>*</span>
                <input type="number"
                    name="mult2"
                    placeholder="Enter your first number"
                    value={this.state.mult2}
                    onChange={ (e) => this.setNum(e, 'mult2') }
                />
                <button onClick={this.sumMultiplication}>=</button>
                <h3>Multiplication results go here!</h3>
                <p>{this.state.multTotal}</p>
            </div>

          </div> 
        )
    }


}


export default Calculator