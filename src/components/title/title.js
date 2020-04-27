import React, {useState} from 'react';
import './title.scss';


  

const Title = () => {
    // const [xRotate, setxRotate] = useState(0);
    // const [yRotate, setyRotate] = useState(0);

    // const mouseMoveHandler = (e) => {
    //     // let width = window.innerWidth/2;
    //     let height = window.innerHeight/2;
    //     e.pageY < height ?  setxRotate((90/height) * (e.offsetY)) : setxRotate(((90/height) * (e.offsetY)));  
        
    //     // console.log(e.offsetX, e.offsetY)s
    //     // console.log(yRotate)
    //     // setyRotate((45/width) * e.pageX)       
    // }

    // window.addEventListener("mousemove", mouseMoveHandler);

    return (
        <div className="title-wrapper"
            // style={{ transform: `rotateY(${yRotate}deg) rotateX(${xRotate}deg)`}}
        >   
            <h2>R.L.James</h2>
            <h1>Web Developer</h1>
        </div>
    )
}

export default Title;
