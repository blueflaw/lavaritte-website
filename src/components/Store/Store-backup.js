import React, { Component } from 'react';
import { Slider } from '../Slider/Slider';
import { SliderData } from '../Slider/SliderData';

import General from './Category/General';
import Clothing from './Category/Clothing/ClothingCategory';
import PosterCategory from './Category/PosterCategory';
import ThreeDModels from './Category/3dModels';
import StockPhotos from './Category/StockPhotos';

import { StoreContaner} from './StoreElements/StoreElements';
import { StoreMenuContainer, MenuContainer, MenuListContainer, MenuItem, MenuLinks } from './StoreElements/StoreMenuElements';
import AccessoriesCategory from './Category/AccessoriesCategory';
import SoftwareBrushesCategory from './Category/SoftwareBrushesCategory';

export class Store extends Component {
    constructor(props) {
        super (props) 

        this.state = {
            category : 'general'
        }
    }

    // componentDidMount() {
    //     window.addEventListener('load', this.handleLoad);
    //  }
    
    //  componentWillUnmount() { 
    //    window.removeEventListener('load', this.handleLoad)  
    //  }
    
    //  handleLoad() {
    //     window.isNavNFTActive = false;
    //     window.isNavStoreActive = true;
    //     window.isNavAboutActive = false;
    //     window.isNavTutorialsActive = false;
    //     window.isNavBlogctive = false;
    //     window.isNavHomeActive = false;
    //  }

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
            <Slider slides={SliderData}/>
            <StoreMenuContainer>
                <MenuContainer>
                    <MenuListContainer>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.isGeneralActive} onClick={() => {
                                this.toggleMe('general')
                                this.isClothingActive = false;
                                this.isPosterActive = false;
                                this.isAccessoriesActive = false;
                                this.isBrushesActive = false;
                                this.is3dModelActive = false;
                                this.isStockPhotosActive = false;
                                this.isGeneralActive = true;
                            }}>Browse all</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.isClothingActive} onClick={() => {
                                this.toggleMe('clothing')
                                this.isClothingActive = true;
                                this.isPosterActive = false;
                                this.isAccessoriesActive = false;
                                this.isBrushesActive = false;
                                this.is3dModelActive = false;
                                this.isStockPhotosActive = false;
                                this.isGeneralActive = false;
                                }}>Clothing</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.isPosterActive} onClick={() => {
                                this.toggleMe('poster')
                                this.isClothingActive = false;
                                this.isPosterActive = true;
                                this.isAccessoriesActive = false;
                                this.isBrushesActive = false;
                                this.is3dModelActive = false;
                                this.isStockPhotosActive = false;
                                this.isGeneralActive = false;
                                }}>Posters</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.isAccessoriesActive} onClick={() => {
                                this.toggleMe('accessories')
                                this.isClothingActive = false;
                                this.isPosterActive = false;
                                this.isAccessoriesActive = true;
                                this.isBrushesActive = false;
                                this.is3dModelActive = false;
                                this.isStockPhotosActive = false;
                                this.isGeneralActive = false;
                                }}>Accessories</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.isBrushesActive} onClick={() => {
                                this.toggleMe('brushes')
                                this.isClothingActive = false;
                                this.isPosterActive = false;
                                this.isAccessoriesActive = false;
                                this.isBrushesActive = true;
                                this.is3dModelActive = false;
                                this.isStockPhotosActive = false;
                                this.isGeneralActive = false;
                                }}>Software Brushes</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.is3dModelActive} onClick={() => {
                                this.toggleMe('3dmodel')
                                this.isClothingActive = false;
                                this.isPosterActive = false;
                                this.isAccessoriesActive = false;
                                this.isBrushesActive = false;
                                this.is3dModelActive = true;
                                this.isStockPhotosActive = false;
                                this.isGeneralActive = false;
                                }}>3d Models</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks $activeStoreMenu={this.isStockPhotosActive} onClick={() => {
                                this.toggleMe('stockphotos')
                                this.isClothingActive = false;
                                this.isPosterActive = false;
                                this.isAccessoriesActive = false;
                                this.isBrushesActive = false;
                                this.is3dModelActive = false;
                                this.isStockPhotosActive = true;
                                this.isGeneralActive = false;
                                }}>Stock Photos</MenuLinks>
                        </MenuItem>
                    </MenuListContainer>
                </MenuContainer>
          </StoreMenuContainer>
          {
            this.state.category === 'general' && <General/>
          }
          {
            this.state.category === 'clothing' && <Clothing/>
          }
          {
            this.state.category === 'poster' && <PosterCategory/>
          }
          {
            this.state.category === 'accessories' && <AccessoriesCategory/>
          }
          {
            this.state.category === 'brushes' && <SoftwareBrushesCategory/>
          }
          {
            this.state.category === '3dmodel' && <ThreeDModels/>
          }
          {
            this.state.category === 'stockphotos' && <StockPhotos/>
          }
          </StoreContaner>
        )
    }
}

export default Store
