import axios from 'axios'


export const getData = async ()=>{
    const res = await axios.get("https://www.prabhatkhabar.com/api/v1/advanced-search?author=Meenakshi%20Rai&sort=latest-published&limit=25");
    // console.log(res.data);
    // console.log(`headline of that ifjsdlkfs is ${res.data.headline}`)
    // console.log(`the headline is ${res.data.items[0].seo["meta-title"]}`) // 
    // console.log(`news keywords are ${res.data.items[0].seo["meta-keywords"]}`);
    return res.data;
}



// Web sotries have a built in mechanism to attach meta data to stories
// Stories also support all your standard social sharing metadata
