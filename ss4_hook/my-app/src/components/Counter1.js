import useCount from "../hook/hook";
function Counter1(){
    const [count, setCount] =useCount(1);
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={(setCount)}>ADD + 1</button>
        </>
    )
}
export default Counter1;