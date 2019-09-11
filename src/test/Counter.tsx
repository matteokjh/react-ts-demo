import React, { useState } from 'react';

interface Props {
    children: (
        count: number ,
        setCount: React.Dispatch<React.SetStateAction<number>>
    ) => JSX.Element | null;
}
// render props
export const Counter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(5)
    return <div>{children(count, setCount)}</div>
}