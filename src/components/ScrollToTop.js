import { useEffect } from "react";
import { useLocation } from "react-router";


export default function ScrollToTop(){
    const {pasthname} = useLocation()

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [pasthname]);

    return null;
}