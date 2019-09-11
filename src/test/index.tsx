import * as React from 'react';

interface User {
    id: number;
    name: string;
    age: number;
    money?: number;
}
interface Props {
    changeMoney: (e: User) => User;
}

export const Test: React.FC<Props> = () => {
        return (<div>
        </div>);
}