import React from "react"

interface Props {
    dropletsAmount: number
}

const Rainfall = ({ dropletsAmount }: Props) => {
    const nbDrop = +dropletsAmount;
    const halfDroplets = Math.floor(nbDrop / 2)
    let droplets = []
    let positions = []

    function computePosition(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < halfDroplets; i++) {
        let dropLeft = computePosition(0, document.body.clientWidth);
        let dropTop = computePosition(document.body.clientHeight - 1000, document.body.clientHeight);

        positions.push([dropLeft, dropTop])

        droplets.push(<div key={i} className="drop" style={{
            left: dropLeft + 'px',
            top: dropTop + "px"
        }}></div>)
    }

    for (let i = 0; i < halfDroplets; i++) {
        droplets.push(<div key={`${i + halfDroplets} `} className="drop" style={{
            left: positions[i][0] + 'px',
            top: positions[i][1] - 1000 + "px"
        }}></div>)
    }

    return (
        <>{droplets}</>
    )
};

export default Rainfall