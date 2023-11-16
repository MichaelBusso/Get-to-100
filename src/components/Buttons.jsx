import Button from "./Button";

const Buttons = (props) => {

    const reached100 = [
        {
            action: () => props.setNumber('n'),
            value: 'New Game'
        },
        {
            action: () => props.setNumber('q'),
            value: 'Quit'
        }
    ];

    const didntReach100 = [
        {
            action: () => props.setNumber((num) => num + 1),
            value: '+ 1'
        },
        {
            action: () => props.setNumber((num) => num - 1),
            value: '- 1'
        },
        {
            action: () => props.setNumber((num) => num * 2),
            value: '* 2'
        },
        {
            action: () => props.setNumber((num) => Math.floor(num / 2)),
            value: '/ 2'
        }
    ]

    return props.gameStatus === 3 ? (
        reached100.map((item, index) => (
            <Button
                action={item.action}
                value={item.value}
                key={index}
            />
        ))
    ) : (
        didntReach100.map((item, index) => (
            <Button
                action={item.action}
                value={item.value}
                key={index}
            />
        ))
    )

}

export default Buttons;