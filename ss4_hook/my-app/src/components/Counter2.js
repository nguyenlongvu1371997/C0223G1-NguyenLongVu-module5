import useCount from "../hook/hook";
function Counter2(){
    const [count, setCount] =useCount(2);
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={(setCount)}>ADD + 2</button>
        </>
    )
}
export default Counter2;