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

    return props.number === 100 ? (
        reached100.map((item) => (
            <Button
                action={item.action}
                value={item.value}
            />
        ))
    ) : (
        didntReach100.map((item) => (
            <Button
                action={item.action}
                value={item.value}
            />
        ))
    )

}

export default Buttons;