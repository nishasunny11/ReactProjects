import { Component, createRef} from "react";
import { render } from "react-dom";

class CApp  extends Component{

    textbox1 = createRef<HTMLInputElement>();
    textbox2 = createRef<HTMLInputElement>();
    result = createRef<HTMLParagraphElement|any>();

         addition =()=> {
          let x= Number(this.textbox1.current?.value);
          let y=Number(this.textbox2.current?.value);
          this.result.current.innerHTML=`Addition of ${x} + ${y} is ${x+y}`;
        }

         subtract =()=> {
            let x= Number(this.textbox1.current?.value);
            let y=Number(this.textbox2.current?.value);
            this.result.current.innerHTML=`Diffrence of ${x} - ${y} is ${x-y}`;
          }

         multiply =()=> {
            let x= Number(this.textbox1.current?.value);
            let y=Number(this.textbox2.current?.value);
            this.result.current.innerHTML=`Product of ${x} * ${y} is ${x*y}`;
          }

        divide =()=> {
            let x= Number(this.textbox1.current?.value);
            let y=Number(this.textbox2.current?.value);
            this.result.current.innerHTML=`Division of ${x} / ${y} is ${x/y}`;
          }


   render(){
    return(<>
    <input type="text" placeholder="Enter number 1" ref={this.textbox1}></input><br/>
        <input type="text" placeholder="Enter number 2" ref={this.textbox2}></input><br/>
        <button onClick={this.addition} >+</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.subtract}>-</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.multiply}>*</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.divide}>/</button>&nbsp;&nbsp;&nbsp;
        <p ref={this.result}></p>
    </>)
   }
}

export default CApp;