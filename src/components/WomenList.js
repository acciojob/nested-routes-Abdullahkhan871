import React from 'react'
import Grooming from './Grooming';
import Shirt from './Shirt';
import Trouser from './Trouser';
import Jewellery from './Jewellery';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const WomenList = () => {
    const {id} = useParams()
    console.log(useParams())
    switch(id){
        case "Grooming":
            return <Grooming />
        case "Grooming":
            return <Grooming />
        case "Shirt":
            return <Shirt />
        case "Trouser":
            return <Trouser />
        case "Jewellery":
            return <Jewellery />
        default : 
            return ""
    }
}

export default WomenList