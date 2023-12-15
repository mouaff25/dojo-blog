import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        if (name === 'mario') {
            setName('luigi');
            setAge(30);
        }
        else {
            setName('mario');
            setAge(25);
        }
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;