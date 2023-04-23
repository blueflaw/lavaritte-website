import React, {useState, useEffect,} from 'react';
import { StoreMenuContainer, MenuContainer, MenuListContainer, MenuItem, MenuLinks } from './StoreElements/StoreMenuElements';

export const StoreMenu = () => {
    

    var [loadGeneral, setGeneral] = useState(false);
    var [loadClothing, setClothing] = useState(false);
    var [loadPoster, setPoster] = useState(false);
    var [loadAccessories, setAccessories] = useState(false);
    var [loadBrushes, setBrushes] = useState(false);
    var [load3dModels, set3dModels] = useState(false);
    var [loadStockPhotos, setStockPhotos] = useState(false);

    useEffect(() => {
        const pathname = window.location.pathname;
        if(pathname === '/store' || pathname.indexOf('store/') !== -1){
            setGeneral(true);
            setClothing(false);
            setPoster(false);
            setAccessories(false);
            setBrushes(false);
            set3dModels(false);
            setStockPhotos(false);
        }
        if(pathname.indexOf('/clothing') !== -1){
            setGeneral(false);
            setClothing(true);
            setPoster(false);
            setAccessories(false);
            setBrushes(false);
            set3dModels(false);
            setStockPhotos(false);
        }
        if(pathname.indexOf('/posters') !== -1){
            setGeneral(false);
            setClothing(false);
            setPoster(true);
            setAccessories(false);
            setBrushes(false);
            set3dModels(false);
            setStockPhotos(false);
        }
        if(pathname.indexOf('/accessories') !== -1){
            setGeneral(false);
            setClothing(false);
            setPoster(false);
            setAccessories(true);
            setBrushes(false);
            set3dModels(false);
            setStockPhotos(false);
        }
        if(pathname.indexOf('/software-brushes') !== -1){
            setGeneral(false);
            setClothing(false);
            setPoster(false);
            setAccessories(false);
            setBrushes(true);
            set3dModels(false);
            setStockPhotos(false);
        }
        if(pathname.indexOf('/3d-models') !== -1){
            setGeneral(false);
            setClothing(false);
            setPoster(false);
            setAccessories(false);
            setBrushes(false);
            set3dModels(true);
            setStockPhotos(false);
        }
        if(pathname.indexOf('/stock-photos') !== -1){
            setGeneral(false);
            setClothing(false);
            setPoster(false);
            setAccessories(false);
            setBrushes(false);
            set3dModels(false);
            setStockPhotos(true);
        }
        
    }, []);
  return (
    <StoreMenuContainer>
        <MenuContainer>
            <MenuListContainer>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={loadGeneral} to={'/store'}>Browse all</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={loadClothing} to={'/store/clothing'}>Clothing</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={loadPoster} to={'/store/posters'}>Posters</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={loadAccessories} to={'/store/accessories'}>Accessories</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={loadBrushes} to={'/store/software-brushes'}>Software Brushes</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={load3dModels} to={'/store/3d-models'}>3D Models</MenuLinks>
                </MenuItem>
                <MenuItem>
                    <MenuLinks $activeStoreMenu={loadStockPhotos} to={'/store/stock-photos'}>Stock Photos</MenuLinks>
                </MenuItem>
            </MenuListContainer>
        </MenuContainer>
    </StoreMenuContainer>
  )
}
