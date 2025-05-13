export function Die({ numSide }) {
    const roll = Math.floor(Math.random() * numSide) + 1;
    return <p>{numSide} - Die roll: {roll}</p>;
}

export function Dedie({ num = 2 }) {
    const roll = Math.floor(Math.random() * num) + 1;
    return <p>{num} - Default Die roll: {roll}</p>;
}
