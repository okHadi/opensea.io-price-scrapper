const link = require("./link.js")

let puppeteer = require('puppeteer-extra');
let pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
 
puppeteer = require('puppeteer')
const priceee = async function scrape(url){
    const browser = await puppeteer.launch() //starts a new browser
    const page = await browser.newPage()    //starts a new page
    console.log("Browser opened up.")
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    console.log("User agent set to PC mode.")
    await page.goto(url)
    console.log("URL is opened.")
    await page.waitForSelector(".TradeStation--price-container").catch(error =>{
        throw("Please enter a valid nft link. It should be an individual nft.").
        throw(browser.close())
        
    })
    console.log("Fetching the price...")
    let elementt = await page.evaluate(() =>{       //evaluate is used to execute javascript in puppeteer
        const price = document.getElementsByClassName("Overflowreact__OverflowContainer-sc-10mm0lu-0 fqMVjm Price--fiat-amount Price--fiat-amount-secondary")[0].innerText
        return {price}
    })
    console.log(elementt)
    browser.close()
}
 
 
priceee(link.link)
//console.log(priceee)