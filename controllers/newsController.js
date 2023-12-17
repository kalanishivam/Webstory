import { getData } from "../services/apidata.js";


const allData = await getData();
let index= -1;
for(let a = 0; a<=25; a++){
    // if(  allData.items[a]['updated-at']  == "1702653512512"){
    //     index = a;
    //     break;
    // }
    if(allData.items[a]['slug'] == "ampstories/webstories/peanuts-benefits-in-winter-for-strong-bone-and-glowing-skin-mungfali-khane-ke-fayde-hindi-mkh"){
        index = a;
        break;
    }
}
let currentCardIndex = 0

export const homePage = async (req, res)=>{
    const encodedURI = allData.items[index].cards[currentCardIndex]["story-elements"][0]['image-s3-key']
    const newURI = encodeURIComponent(encodedURI);
    const baseUrl = "https://media.assettype.com/"
    const imageURI = baseUrl + newURI;
    res.render("webstory.ejs", {allData : allData , index: index , currentCardIndex: 0 , imageURI : imageURI})
}


export const nextBtn = (req , res) =>{
    currentCardIndex = currentCardIndex+1;
    // console.log("currentindex value", currentCardIndex)
    if(currentCardIndex == allData.items[index].cards.length-1){
        currentCardIndex = 0;
    }
    const encodedURI = allData.items[index].cards[currentCardIndex]["story-elements"][0]['image-s3-key']
    const newURI = encodeURIComponent(encodedURI);
    // console.log(`new URI componenet is ${newURI}`)
    const baseUrl = "https://media.assettype.com/"
    const imageURI = baseUrl + newURI;
    // console.log(imageURI);
    res.render("webstory.ejs", {allData : allData , index: index , currentCardIndex: currentCardIndex , imageURI : imageURI})
}


export const prevBtn = (req, res) =>{
    currentCardIndex = currentCardIndex-1;
    if(currentCardIndex <0){
        currentCardIndex = allData.items[index].cards.length-1;
    }
    const encodedURI = allData.items[index].cards[currentCardIndex]["story-elements"][0]['image-s3-key']
    // console.log(encodedURI)
    const newURI = encodeURIComponent(encodedURI);
    const baseUrl = "https://media.assettype.com/"
    const imageURI = baseUrl + newURI;
    res.render("webstory.ejs", {allData : allData , index: index , currentCardIndex: currentCardIndex , imageURI : imageURI})
}