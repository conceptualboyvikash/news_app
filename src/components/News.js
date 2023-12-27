import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles= [
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Brian Heater",
        "title": "Apple Vision Pro tipped for late Jan/early Feb release | TechCrunch",
        "description": "Apple oracle Ming-Chi Kuo offered an early holiday gift, narrowing down what he believes will be a “late-January/early-February” release.",
        "url": "https://techcrunch.com/2023/12/26/apple-vision-pro-tipped-for-late-jan-early-feb-release/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/CMC_6538.jpg?resize=1200,800",
        "publishedAt": "2023-12-26T21:37:12Z",
        "content": "Weve known about the Vision Pro for more than half-a-year now (not to mention the years of rumors), but Apples first spatial computing device is one of consumer electronics biggest question marks hea… [+1530 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Aisha Malik",
        "title": "Bluesky rolls out in-app video and music player and new 'hide post' feature | TechCrunch",
        "description": "Decentralized social network Bluesky is rolling out a new in-app video and music player for links, along with a new \"hide post\" feature.",
        "url": "https://techcrunch.com/2023/12/26/bluesky-rolls-out-in-app-video-and-music-player-for-links-and-a-new-hide-post-feature/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/Bluesky.jpg?resize=1200,630",
        "publishedAt": "2023-12-26T21:22:13Z",
        "content": "Decentralized social network Bluesky is rolling out a new in-app video and music player for links, along with a new “hide post” feature. The new additions bring Bluesky’s user experience closer to X … [+1578 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Zack Whittaker",
        "title": "CBS, Paramount owner National Amusements says it was hacked | TechCrunch",
        "description": "National Amusements, the cinema chain and corporate parent giant of media giants Paramount and CBS, has confirmed it experienced a data breach in which",
        "url": "https://techcrunch.com/2023/12/26/cbs-paramount-owner-national-amusements-hacked/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/national-amusements-cbs-paramount-breach.jpg?resize=1200,800",
        "publishedAt": "2023-12-26T15:50:50Z",
        "content": "National Amusements, the cinema chain and corporate parent giant of media giants Paramount and CBS, has confirmed it experienced a data breach in which hackers stole the personal information of tens … [+1961 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Brian Heater",
        "title": "Apple Watch US ban upheld | TechCrunch",
        "description": "A recent ban on U.S. Apple Watch will remain in place, after the Biden administration declined to veto an earlier ruling by the ITC.",
        "url": "https://techcrunch.com/2023/12/26/apple-watch-us-ban-upheld/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/Apple-Watch-Series-9-03.jpg?w=1200",
        "publishedAt": "2023-12-26T15:39:24Z",
        "content": "A recent U.S. ban on Apple Watch imports will remain in place, after the Biden administration declined to veto an earlier ruling by the International Trade Commission. The ITC ruling goes into effect… [+2290 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Alex Wilhelm",
        "title": "VCs are entering 2024 with 'healthy paranoia' | TechCrunch",
        "description": "Today on Equity, we're joined by Deepka Rana, a London-based Principal at Northzone focused on early-stage companies across consumer internet and B2B SaaS.",
        "url": "https://techcrunch.com/2023/12/26/vcs-are-entering-2024-with-healthy-paranoia/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1211462615.jpg?resize=1200,900",
        "publishedAt": "2023-12-26T14:46:29Z",
        "content": "Listen here or wherever you get your podcasts.\r\nHello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nTo close out … [+1236 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Lorenzo Franceschi-Bicchierai",
        "title": "Hackers stole $2 billion in crypto in 2023, data shows | TechCrunch",
        "description": "Data shows hackers stole around $2 billion in crypto this year, according to data analyzed by blockchain security firms.",
        "url": "https://techcrunch.com/2023/12/26/hackers-stole-2-billion-in-crypto-in-2023-data-shows/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/money-spill-2023.jpg?resize=1200,675",
        "publishedAt": "2023-12-26T14:05:55Z",
        "content": "For yet another year, hackers stole billions of dollars in crypto. But for the first time since 2020, the trend is downwards, according to crypto security firms.\r\nThis year, hackers stole around $2 b… [+2254 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Amanda Silberling",
        "title": "The internet moments that defined 2023 | TechCrunch",
        "description": "Can you believe that it was only this summer when Baby Gronk rizzed up Livvy Dunne? Sometimes, the internet’s most viral memes may seem entirely",
        "url": "https://techcrunch.com/2023/12/26/the-internet-moments-that-defined-2023/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/weird-internet-moments.jpg?resize=1200,720",
        "publishedAt": "2023-12-23T22:19:20Z",
        "content": "Can you believe that it was only this summer when Baby Gronk rizzed up Livvy Dunne? Sometimes, the internets most viral memes may seem entirely incomprehensible (like when Baby Gronk rizzed up Livvy … [+12379 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Casber Wang",
        "title": "What VCs are looking for in the next wave of cybersecurity startups | TechCrunch",
        "description": "The next wave of successful startups will help companies harness GenAI to improve organizational productivity while preventing attacks.",
        "url": "https://techcrunch.com/2023/12/26/what-vcs-are-looking-for-in-the-next-wave-of-cybersecurity-startups/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1079012962.jpg?resize=1200,786",
        "publishedAt": "2023-12-22T22:23:54Z",
        "content": "In cybersecurity, AI often stands for already implemented. Security vendors have used AI-based technologies to use existing knowledge databases and address talent gaps. As an investor who focuses on … [+2476 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Paul Sawers",
        "title": "The eternal struggle between open source and proprietary software | TechCrunch",
        "description": "The past 12 months really underscored both the power and perils of open source software. This is nothing new, of course.",
        "url": "https://techcrunch.com/2023/12/26/the-eternal-struggle-between-open-source-and-proprietary-software/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1346186197-e1703163566186.jpg?resize=1200,675",
        "publishedAt": "2023-12-22T20:07:54Z",
        "content": "Whenever chaos engulfs a proprietary technology relied on by millions, the default knee-jerk reaction from many seems to be: “Hey, let’s see what the open source world has to offer.”\r\nCase in point: … [+6123 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Tim De Chant",
        "title": "EV fast-charging networks face a challenging 2024 | TechCrunch",
        "description": "The EV world, from a charging perspective, was previously split in two. There was Tesla and then there was everyone else.",
        "url": "https://techcrunch.com/2023/12/26/ev-fast-charging-networks-2024/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/07/ElectrifyAmerica-VancouverWA.jpg?resize=1200,800",
        "publishedAt": "2023-12-19T22:56:41Z",
        "content": "Sometime in 2024, maybe as early as February, half a dozen electric vehicle charging companies will face a reckoning.\r\nFor years, they had little competition except for each other, which is to say, n… [+1539 chars]"
        }
        ]
    constructor(){
        super();
        this.state={

            articles:this.articles,
            loading:false,
        }
        console.log("hellow i am a constructor form News component");
    }
  render() {
    return (
      <div className="container my-3">
        <h2>News_KING -Top Headlines</h2>
        <div className="row">
            <div className="col-md-3">
                 <NewsItem title="mytitle" discription="my Discription" imageUrl="https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1079012962.jpg?resize=1200,786" newsUrl="TODO"/>
            </div>
            <div className="col-md-3">
                 <NewsItem title="mytitle" discription="my Discription" />
            </div>
            <div className="col-md-3">
                 <NewsItem title="mytitle" discription="my Discription" />
            </div>
        </div>
       
      </div>
    )
  }
}
