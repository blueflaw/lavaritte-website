import React, { Component } from 'react';
import { StoreContaner} from './StoreElements/StoreElements';
import General from './Category/General';

export class Store extends Component {
    constructor(props) {
        super (props) 

        this.state = {
            category : 'general'
        }
    }

    toggleMe = (value) =>{
        this.setState({
            category: value
        })
    }
    
    isClothingActive = false;
    isPosterActive = false;
    isAccessoriesActive = false;
    isBrushesActive = false;
    is3dModelActive = false;
    isStockPhotosActive = false;
    isGeneralActive = true;

    render () {
        return (
            <StoreContaner id="store">
                <General/>
            </StoreContaner>
        )
    }
}

export default Store
