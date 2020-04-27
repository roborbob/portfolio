import React, { useState } from 'react';
import Space from '../../assets/video/space.mp4';
import Star from '../../assets/video/star.mp4';
import Title from '../../components/title/title';
import './landingPage.scss';

const LandingPage = () => {
    const [rotateGrid, setRotateGrid] = useState(0)
    const grid = ["a", "b", "c", "d", "e", "s", "t", "u", "v", "w", "x", "y", "z"]

    const scrollHandler = () => {
        // let transformSpace = window.innerHeight-grid.offsetTop;
        let rotate = (90 / window.innerHeight) * window.pageYOffset;
        // let rotate = (180/transformSpace) * window.pageYOffset;
        setRotateGrid(rotate);
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <div className="landingPage">
            <Title />
            {/* <video src={Space} autoPlay loop muted></video> */}
            <div className="grid" style={{ transform: `rotateX(${rotateGrid}deg)`}}>
                {grid.map(index => (
                    <div className={index} key={index}>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingPage;