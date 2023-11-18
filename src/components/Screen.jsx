import './components style/Screen.css'

const Screen = (props) => {

    let winnersToShow = [];

    for (let i = 0; i < Math.min(3, props.winners.length); i++) {
        winnersToShow.push(props.players[props.winners[i]])
    }

    return (
        <div className='container' key='screenComtainer'>
            {winnersToShow.map((winner, index) => (
                <h2 key={index}>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'} : {winner.name} in {winner.steps} steps</h2>
            ))}
        </div>
    )
}

export default Screen;