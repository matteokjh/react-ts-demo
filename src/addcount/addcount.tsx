import * as React from 'react';
const useState = React.useState;

const Ex = ()=>{
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>you Click {count} times </p>
            <button onClick={()=> setCount(count+1)}>click me</button>
        </div>
    )
}
export default Ex;