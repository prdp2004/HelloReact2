import {useState ,useEffect} from "react";

export default function Counter () {
let [count,setCount]  = useState(0);

let incCount = () => {
setCount((currCount) => currCount+1);
};
useEffect (function printSomething() {
    console.log("this is a side-effect");
})


return (
<div>
<h3> count x={count}</h3>
<button onClick={incCount}>+1</button>
<h3> count y={count}</h3>
<button onClick={incCount}>+1</button>
</div>

);
}