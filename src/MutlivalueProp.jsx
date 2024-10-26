export default function Die({numSide}){
    const roll = Math.floor(Math.random()*numSide)+1;
    return <p>{numSide} - Die roll: {roll}</p>
}