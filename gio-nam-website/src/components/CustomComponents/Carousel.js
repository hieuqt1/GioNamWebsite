import React from "react";
import { Carousel as CustomCarousel} from 'react-carousel-minimal';


export default function Carousel(props) {
    const data = props.imageList.map((e) => {return {'image': e}})

    return (
        <CustomCarousel 
        data={data}
        time={4000}
        automatic={props.auto_bool}
        dots={true}
        radius="8px"
        />
    )
}