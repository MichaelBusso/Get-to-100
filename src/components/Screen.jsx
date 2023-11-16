const Screen = (props) => {

    let winnersToShow = [];

    for (let i = 0; i < props.winners.length; i++) {
        winnersToShow.push(props.players[props.winners[i]])
    }

    console.log(props.players);
    console.log(props.winners);
    console.log(winnersToShow);

    return (
        <div style={{ width: '200px', height: '100px' }}>
            {winnersToShow.map((winner, index) => (
                <h3>{index + 1}{index === 0 ? 'st 🥇' : index === 1 ? 'nd 🥈' : 'rd 🥉'} : {winner.name} in {winner.steps}</h3>
            ))}
        </div>
    )
}

export default Screen;