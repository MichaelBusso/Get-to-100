import './components style/Screen.css'

const Screen = (props) => {

    let winnersToShow = [];

    for (let i = 0; i < Math.min(3, props.winners.length); i++) {
        winnersToShow.push(props.players[props.winners[i]]);
    }

    const getFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : [];
    };
    let storage = getFromLocalStorage('users');

    let average = [];
    storage.forEach((user) => {
        let i = 0;
        let sum = 0;
        for (i; i < user.scores.length; i++) {
            sum += user.scores[i];
        }
        average.push({ name: user.name, average: (sum / i).toFixed(2) });
    });

    average.sort((usser1, user2) => usser1.average - user2.average);
    let topAverage = [];
    for (let i = 0; i < Math.min(3, average.length); i++) {
        topAverage.push(average[i]);
    }

    return (
        <div>
            <div className='screenContainer' key='topContainer'>
                <h2>Rankings</h2>
                {topAverage.map((winner, index) => (
                    <h4 key={index}>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'} : <u>{winner.name}</u> in average of {winner.average} steps</h4>
                ))}
            </div>
            <div className='screenContainer' key='winnersContainer'>
                <h1>Current Winners</h1>
                {winnersToShow.map((winner, index) => (
                    <h2 key={index}>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'} : <u>{winner.name}</u> in {winner.steps} steps</h2>
                ))}
            </div>
        </div>
    )
}

export default Screen;