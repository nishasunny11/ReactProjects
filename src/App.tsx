import {useRef} from "react";

const App =() => {
   
        let textbox1 = useRef<HTMLInputElement>(null);
        let textbox2 = useRef<HTMLInputElement>(null);
        let result = useRef<HTMLParagraphElement|any>(null);

        let addition =()=> {
          let x= Number(textbox1.current?.value);
          let y=Number(textbox2.current?.value);
          result.current.innerHTML=`Addition of ${x} + ${y} is ${x+y}`;
        }

        let subtract =()=> {
            let x= Number(textbox1.current?.value);
            let y=Number(textbox2.current?.value);
            result.current.innerHTML=`Diffrence of ${x} - ${y} is ${x-y}`;
          }

        let multiply =()=> {
            let x= Number(textbox1.current?.value);
            let y=Number(textbox2.current?.value);
            result.current.innerHTML=`Product of ${x} * ${y} is ${x*y}`;
          }

          let divide =()=> {
            let x= Number(textbox1.current?.value);
            let y=Number(textbox2.current?.value);
            result.current.innerHTML=`Division of ${x} / ${y} is ${x/y}`;
          }

        return(<>
        <input type="text" placeholder="Enter number 1" ref={textbox1}></input><br/>
        <input type="text" placeholder="Enter number 2" ref={textbox2}></input><br/>
        <button onClick={addition} >+</button>&nbsp;&nbsp;&nbsp;
        <button onClick={subtract}>-</button>&nbsp;&nbsp;&nbsp;
        <button onClick={multiply}>*</button>&nbsp;&nbsp;&nbsp;
        <button onClick={divide}>/</button>&nbsp;&nbsp;&nbsp;
        <p ref={result}></p>
        </>)
    }

export default App;