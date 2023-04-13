import React from 'react';
import { FaTshirt, FaCog, FaFile, FaPaintBrush, FaCube, FaPhotoVideo } from "react-icons/fa";

export const StoreDataCard = [
    {
        id: "SC001",
        topline: "T-SHIRTS, HOODIES, SWEATSHIRTS",
        header: "Clothing",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/storecard/storecard1.jpg',
        alt: 'Clothing',
        buttontext: "view products",
        link: "https://www.redbubble.com/people/blueflaw/shop?asc=u&asc=u&iaCode=u-clothing"
    },
    {
        id: "SC002",
        topline: "ART PRINTS AND POSTERS",
        header: "Posters",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/storecard/storecard2.jpg',
        alt: 'Clothing',
        buttontext: "view products",
        link: "https://www.redbubble.com/people/blueflaw/shop?&asc=u&iaCode=u-prints"
    },
    {
        id: "SC003",
        topline: "COFFEE MUGS AND MORE",
        header: "ACCESSORIES",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/storecard/storecard3.jpg',
        alt: 'Clothing',
        buttontext: "view products",
        link: "https://www.redbubble.com/people/blueflaw/shop?asc=u&asc=u&iaCode=u-accessories"
    },
];

export const LookingForStore = [
    {
        id: "LF001",
        topline: "Clothing",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/looking_for_something/LookingforClothing.jpg',
        alt: 'Clothing',
        icon: <FaTshirt/>,
        link: "/store/clothing",
        sub: "Clothing?"
    },
    {
        id: "LF002",
        topline: "Posters",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/looking_for_something/LookingforPoster.jpg',
        alt: 'Posters',
        icon: <FaFile/>,
        link: "/store/posters",
        sub: "Posters?"
    },
    {
        id: "LF003",
        topline: "Accessories",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/looking_for_something/LookingforAccessories.jpg',
        alt: 'Accessories',
        icon: <FaCog/>,
        link: "/store/accessories",
        sub: "Accessories?"
    },
    {
        id: "LF004",
        topline: "Software Brushes",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/looking_for_something/LookingforBrushes.jpg',
        alt: 'Software Brushes',
        icon: <FaPaintBrush/>,
        link: "/store/software-brushes",
        sub: "Software Brushes?"
    },
    {
        id: "LF005",
        topline: "3d Models",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/looking_for_something/Lookingfor3dModels.jpg',
        alt: '3d Models',
        icon: <FaCube/>,
        link: "/store/3d-models",
        sub: "3d Models?"
    },
    {
        id: "LF006",
        topline: "Stock Photos",
        imagepath: 'https://upenandy.sirv.com/lavaritte.com/store/looking_for_something/LookingforStockPhotos.jpg',
        alt: 'Stock Photos',
        icon: <FaPhotoVideo/>,
        link: "/store/stock-photos",
        sub: "Stock Photos?"
    },
];

export const Accessories = [
    {
        id: "A005",
        title: "Vagabond Classic Mouse Pad",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Accessories/vagabond_desk-mat.jpg',
        alt : "BlueFlaw Print Mouse Pad",
        author : "Allard Lavaritte",
        type : "Mouse Pad",
        prize : "$36.00",
        link : "https://www.redbubble.com/i/mouse-pad/Vagabond-Classic-by-blueflaw/143287189.GAP22?asc=u"
    },
    {
        id: "A004",
        title: "BlueFlaw Print Mouse Pad",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Accessories/BlueFlaw-Print-Deskmat.jpg',
        alt : "BlueFlaw Print Mouse Pad",
        author : "Allard Lavaritte",
        type : "Mouse Pad",
        prize : "$36.00",
        link : "https://www.redbubble.com/i/mouse-pad/BlueFlaw-Print-by-blueflaw/142969754.GAP22"
    },
    {
        id: "A003",
        title: "Eye of Winter Mouse Pad",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Accessories/eye-of-winter_desk-mat.jpg',
        alt : "Eye of Winter Mouse Pad",
        author : "Allard Lavaritte",
        type : "Mouse Pad",
        prize : "$36.00",
        link : "https://www.redbubble.com/i/mouse-pad/Eye-of-Winter-by-blueflaw/137333562.GAP22"
    },
    {
        id: "A001",
        title: "EVA 00 Mouse Pad",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Accessories/eva00_desk-mat.jpg',
        alt : "EVA 00 Mouse Pad",
        author : "Allard Lavaritte",
        type : "Mouse Pad",
        prize : "$36.00",
        link : "https://www.redbubble.com/i/mouse-pad/EVA-00-by-blueflaw/112332813.GAP22?asc=u"
    },
    {
        id: "A002",
        title: "The Chronicles Mouse Pad",
        // imagePath: require('../../images/store/bb_desk-mat.jpg'),
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Accessories/chronicles_desk-mat.jpg',
        alt : "EVA 00 Mouse Pad",
        author : "Allard Lavaritte",
        type : "Mouse Pad",
        prize : "$36.00",
        link : "https://www.redbubble.com/i/mouse-pad/The-Chronicles-of-my-melancholic-existence-by-blueflaw/95867584.GAP22?asc=u"
    },
];

export const SoftwareBrushes = [
    {
        id: "A001",
        title: "BlueFlaws Basic Brush",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/brushset.jpg',
        alt : "BlueFlaws Basic Brush",
        author : "Allard Lavaritte",
        type : "Brushes",
        prize : "$2.00",
        link : "https://artstn.co/m/n706y"
    },
];

export const WallArt = [
    {
        id: "WA003",
        title: "Second Angel Canvas Print",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Poster/poster3.jpg',
        alt : "Second Angel Canvas Print",
        author : "Allard Lavaritte",
        type : "Framed Art Print",
        prize : "$145.38",
        link : "https://www.redbubble.com/i/canvas-print/Second-Angel-by-blueflaw/142998884.T8P6B"
    },
    {
        id: "WA002",
        title: "Eye of Winter Art Print",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Poster/poster2.jpg',
        alt : "Eye of Winter Art Print",
        author : "Allard Lavaritte",
        type : "Framed Art Print",
        prize : "$221.84",
        link : "https://www.redbubble.com/i/framed-print/EVA-00-by-blueflaw/112332813.L0LHG?asc=u"
    },
    {
        id: "WA001",
        title: "EVA 00 Framed Art Print",
        imagePath: 'https://upenandy.sirv.com/lavaritte.com/store/redbubble/Poster/poster1.jpg',
        alt : "EVA 00 Framed Art Print",
        author : "Allard Lavaritte",
        type : "Framed Art Print",
        prize : "$131.72",
        link : "https://www.redbubble.com/i/framed-print/EVA-00-by-blueflaw/112332813.AJ1A3?asc=u"
    },
];