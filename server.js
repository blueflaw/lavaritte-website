const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) =>{
    const filePath = path.join(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "Allard Lavaritte")
            .replace(/__DESCRIPTION__/g, "Allard Lavaritte is a self-taught multi-talented artist with skills in Creative Direction, Illustration, Graphic Design, UI/UX, and Web Development. He creates visually stunning designs with precision and imagination. Contact him at me@lavaritte.com.")
            .replace(/__IMAGE__/g, "https://lavaritte.com/images/Eye-of-Winter-mini.jpg")
            .replace(/__URL__/g, "https://lavaritte.com/");

        res.send(data)
    });
});

app.get("/NFT", (req, res) =>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "Lavaritte NFT")
            .replace(/__DESCRIPTION__/g, "NFTs (Non-Fungible Tokens) are unique digital assets that use blockchain technology to certify ownership and authenticity of various digital creations such as art, music, and collectibles.")
            .replace(/__IMAGE__/g, "https://cdnb.artstation.com/p/assets/images/images/019/380/861/large/allard-lavaritte-untitled-1.jpg")
            .replace(/__URL__/g, "https://lavaritte.com/NFT");
        res.send(data)
    });
});

app.get("/store", (req, res) =>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "Lavaritte Store")
            .replace(/__DESCRIPTION__/g, "The Store of Allard Lavaritte offers a collection of unique and visually stunning art pieces, illustrations, and designs, all created by the multi-talented artist himself.")
            .replace(/__IMAGE__/g, "https://upenandy.sirv.com/lavaritte.com/store/slider/store2.jpg")
            .replace(/__URL__/g, "https://lavaritte.com/store");
        res.send(data)
    });
});

app.get("/tutorial", (req, res) =>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "Lavaritte Tutorial")
            .replace(/__DESCRIPTION__/g, "I don't charge for tutorials as I learned from free ones as a child. It's good to give back.")
            .replace(/__IMAGE__/g, "https://cdnb.artstation.com/p/assets/images/images/056/930/243/large/allard-lavaritte-darkness-demon-final.jpg?1670427024")
            .replace(/__URL__/g, "https://lavaritte.com/tutorial");
        res.send(data)
    });
});

app.get("/blogs", (req, res) =>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "Lavaritte Blogs")
            .replace(/__DESCRIPTION__/g, "Allard Lavaritte's blogs are a great resource for aspiring artists and designers, providing insights, tips, and inspiration for the creative community.")
            .replace(/__IMAGE__/g, "https://cdnb.artstation.com/p/assets/images/images/042/229/393/large/allard-lavaritte-bb-small.jpg?1633950884")
            .replace(/__URL__/g, "https://lavaritte.com/blog");
        res.send(data)
    });
});

app.get("/about", (req, res) =>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "About Allard Lavaritte")
            .replace(/__DESCRIPTION__/g, "Allard Lavaritte is a self-taught multi-talented artist with skills in Creative Direction, Illustration, Graphic Design, UI/UX, and Web Development. He creates visually stunning designs with precision and imagination. Contact him at me@lavaritte.com.")
            .replace(/__IMAGE__/g, "https://cdnb.artstation.com/p/assets/images/images/033/208/387/large/allard-lavaritte-first-contact-v2a.jpg")
            .replace(/__URL__/g, "https://lavaritte.com/about");
        res.send(data)
    });
});

app.get("/newsletter", (req, res) =>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) =>{
        if(err){
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, "Lavaritte Newsletter")
            .replace(/__DESCRIPTION__/g, "Allard Lavaritte's newsletter is a valuable source of information for anyone interested in his latest projects, upcoming events, and exclusive offers on his artwork and designs.")
            .replace(/__IMAGE__/g, "https://lavaritte.com/images/Eye-of-Winter-mini.jpg")
            .replace(/__URL__/g, "https://lavaritte.com/newsletter")
        res.send(data)
    });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`)
});