import React from "react"

interface Props {
    dropletsAmount: number,
    amplitude: number
}

const ObliqueRain = ({ dropletsAmount, amplitude }: Props) => {
    let nbDrop = +dropletsAmount;
    let halfDroplets = Math.floor(nbDrop / 2)
    let droplets = []
    let positions = []

    function computePosition(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < halfDroplets; i++) {
        let dropLeft = computePosition(0, document.body.clientWidth * 2);
        let dropTop = computePosition(document.body.clientHeight - 1000, document.body.clientHeight);

        positions.push([dropLeft, dropTop])

        droplets.push(<div key={i} className="droplet" style={{
            left: dropLeft + 'px',
            top: dropTop + "px"
        }}></div>)
    }

    for (let i = 0; i < halfDroplets; i++) {
        droplets.push(<div key={`${i + halfDroplets} `} className="droplet" style={{
            left: positions[i][0] + +amplitude + 'px',
            top: positions[i][1] - 1000 + "px"
        }}></div>)
    }

    return (
        <>{droplets}</>
    )
};

export default ObliqueRain