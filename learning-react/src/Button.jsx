function printHello() {
    console.log("Hello");
}
 
function printBye() {
    console.log("Bye");
} 

export default function Button() {
return (
<div>

    <button onclick={printHello}>Click me</button>
    <p onMouseOver={printBye}>This was created for no reason</p>
</div>
);
}