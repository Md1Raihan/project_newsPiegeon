import React from 'react'
import Newsitem from './Newsitem'

function News() {
    const article = [
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "SuLin Tan",
            "title": "Jail will be tough for exMalaysian leader Najib, who's used to a 7star hotel lifestyle, says Anwar  CNBC",
            "description": "Former Prime Minister Najib, charged for his role in the embezzlement of billions of dollars from 1MDB, lost his appeal against his jail sentence on Monday.",
            "url": "https://www.cnbc.com/2022/08/24/jailwillbetoughforexmalaysianpmnajibrazakanwaribrahim.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/1071036281660537852895gettyimages1242512355AFP_32GJ4VT.jpeg?v=1661318232&w=1920&h=1080",
            "publishedAt": "20220824T06:32:18Z",
            "content": "Prison will be a tough contrast to former Malaysian Prime Minister Najib Razak's sevenstar hotel lifestyle as Malaysia begins to find \"closure\" from the scandal that had rocked the nation for years,… [+3840 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "In his quest to bring a championship to the Brooklyn Nets, Kevin Durant is starting the season 01  CBS Sports",
            "description": "Sure, the Nets' superstar took an L in August, but all will be right if he delivers a W in June",
            "url": "https://www.cbssports.com/nba/news/inhisquesttobringachampionshiptothebrooklynnetskevindurantisstartingtheseason01/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/08/10/971375660c174c51907c724990ae67ef/thumbnail/1200x675/cf5e74b45ff188d707853f8b8465841a/kevindurantusatsi.jpg",
            "publishedAt": "20220824T06:32:00Z",
            "content": "Kevin Durant lost.\r\nThat's the takeaway from the statement Tuesday from the Brooklyn Nets announcing that the organization and its disgruntled superstar \"have agreed to move forward with our partners… [+4918 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Stocks slip, dollar firm ahead of Jackson Hole conference  Reuters",
            "description": "Asian stock markets slipped for an eighth straight session on Wednesday, with investors nervous about the scale of problems in China's property sector and bracing for a hawkish message from the Federal Reserve at this week's Jackson Hole symposium.",
            "url": "https://www.reuters.com/markets/europe/globalmarketswrapup120220824/",
            "urlToImage": "https://www.reuters.com/resizer/3fNCsT_6nWHkJ2QANrD1WScbGxY=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/2Y2CI5WT4NOFBN6KE3MJL5J7W4.jpg",
            "publishedAt": "20220824T06:22:00Z",
            "content": "SINGAPORE, Aug 24 (Reuters)  Asian stock markets slipped for an eighth straight session on Wednesday, with investors nervous about the scale of problems in China's property sector and bracing for a … [+3536 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Charlie Crist: Florida Democrats pick challenger to Ron DeSantis  BBC",
            "description": "Democrats are keen to eclipse rising star Ron DeSantis amid expectations he may run for the White House.",
            "url": "https://www.bbc.com/news/worlduscanada62655157",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/177F2/production/_126424269_crist.jpg",
            "publishedAt": "20220824T05:51:27Z",
            "content": "By Jude SheerinBBC, Washington\r\nDemocratic voters have picked congressman Charlie Crist to take on Florida's Republican Governor Ron DeSantis in the midterm elections.\r\nMr Crist beat the state's agri… [+4851 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Gregory Krieg, Steve Contorno and Dan Merica, CNN",
            "title": "Seven takeaways from primaries in Florida, New York and Oklahoma runoffs  CNN",
            "description": "Some of the final pieces of the midterm puzzle came into focus as Tuesday primaries in New York, Florida and Oklahoma locked in key parts of the November election slate.",
            "url": "https://www.cnn.com/2022/08/23/politics/floridanewyorkoklahomaelectiontakeaways/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220823200951cristdesantissplitsupertease.jpg",
            "publishedAt": "20220824T04:49:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sonia Moghe, CNN",
            "title": "Authorities allege Gary Busey asked detectives to 'talk victims out of pursuing complaints' after they alleged he touched them  CNN",
            "description": "At least three people reported to police that Gary Busey allegedly touched them inappropriately at a Monster Mania event in New Jersey earlier this month, according to a probable cause affidavit. Police said the actor initially denied groping anyone, then ask…",
            "url": "https://www.cnn.com/2022/08/23/entertainment/garybuseysexoffenseresponse/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220823140642garybuseyfile2019restrictedsupertease.jpg",
            "publishedAt": "20220824T03:56:00Z",
            "content": "(CNN)At least three people reported to police that Gary Busey allegedly touched them inappropriately at a Monster Mania event in New Jersey earlier this month, according to a probable cause affidavit… [+2781 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. military carries out strike in Syria on Iranlinked targets  Reuters",
            "description": "The U.S. military said it carried out air strikes on Tuesday in Syria's Deir alZor against facilities used by groups affiliated with Iran's elite Revolutionary Guards Corps (IRGC).",
            "url": "https://www.reuters.com/world/middleeast/usmilitarycarriesoutstrikesyriairanlinkedtargets20220824/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.png?d=108",
            "publishedAt": "20220824T03:12:00Z",
            "content": "WASHINGTON, Aug 23 (Reuters)  The U.S. military said it carried out air strikes on Tuesday in Syria's Deir alZor against facilities used by groups affiliated with Iran's elite Revolutionary Guards … [+2059 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YourTango"
            },
            "author": "Ruby Miranda",
            "title": "The 3 Zodiac Signs With Rough Horoscopes On Wednesday, August 24, 2022  YourTango",
            "description": "Three zodiac signs with rough horoscopes on Wednesday, August 24, 2022 feel the pressure building and it causes a lot of stress, which can also be used in a positive way.",
            "url": "https://www.yourtango.com/2022353339/zodiacsignsroughhoroscopeswednesdayaugust242022",
            "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiacsignsroughhoroscopeswednesdayaugust242022.png?itok=l71K1rao",
            "publishedAt": "20220824T03:03:03Z",
            "content": "Today's misunderstandings and impatient moods are brought to us by one major transit in particular: Uranus in retrograde. It even sounds foreboding, but it's not as negative as we might think. \r\nIn f… [+5196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "https://www.theguardian.com/profile/joemiddleton,https://www.theguardian.com/profile/samanthalock,https://www.theguardian.com/profile/damiancarrington,https://www.theguardian.com/profile/charlottegrahammclay,https://www.theguardian.com/profile/rupertneate",
            "title": "RussiaUkraine war: Ukraine braces for Russian attacks as it marks independence day – live news  The Guardian",
            "description": "Ukraine marks its independence from Soviet rule and six months of war with Russia; Volodymyr Zelenskiy warns of ‘hideous Russian provocations and brutal strikes’",
            "url": "https://www.theguardian.com/world/live/2022/aug/24/russiaukrainewarukrainebracesforrussianattacksasitmarksindependencedaylivenews",
            "urlToImage": "https://i.guim.co.uk/img/media/be1d59312dd30f67cd47f3bec0cf28e300641044/0_86_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=5fa22982a8277de7d02823c222774341",
            "publishedAt": "20220824T02:54:02Z",
            "content": "Ukraine braces for Russian strikes on independence day\r\nUkraine is bracing for possible brutal strikes as it marks 31 years since the country broke free from the Soviet Union and six months of war wi… [+17559 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nikkei.com"
            },
            "author": "Staff Writer",
            "title": "Japan PM Kishida set to order new nuclear power plant construction  Nikkei Asia",
            "description": "Major shift in energy policy would focus on nextgeneration types of facilities",
            "url": "https://asia.nikkei.com/Politics/JapanPMKishidasettoordernewnuclearpowerplantconstruction",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3apnortheast1.amazonaws.com%252Fpshexftnikkei3937bb4%252Fimages%252F4%252F7%252F6%252F5%252F419156745engGB%252FCropped1661307245photo_SXM2022082400001052.jpg?width=1260&height=630&fit=cover&gravity=faces&source=narcms",
            "publishedAt": "20220824T02:32:00Z",
            "content": "TOKYO  Japan is entering a new phase in its nuclear energy strategy, with Prime Minister Fumio Kishida set to order the development and construction of nextgeneration nuclear power plants at Wedne… [+224 chars]"
        },
        {
            "source": {
                "id": "abcnews",
                "name": "ABC News"
            },
            "author": "Rachel Scott, Molly Nagle, Cheyenne Haslett, Arthur Jones II, Luke Barr",
            "title": "President Biden poised to announce some form of student loan forgiveness: Sources  ABC News",
            "description": "Talks have centered on around $10,000 for those who make less than $125,000.",
            "url": "https://abcnews.go.com/Politics/presidentbidenpoisedannounceformstudentloanforgiveness/story?id=88736949",
            "urlToImage": "https://s.abcnews.com/images/Politics/studentloancanceljoebiden02rtllr220823_1661300202126_hpMain_16x9_992.jpg",
            "publishedAt": "20220824T01:44:41Z",
            "content": "As another deadline nears on the restart of payments for America's $1.7 trillion in federal student loans, President Joe Biden is poised to decide whether to cancel debt for a subset of Americans and… [+8338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Martin Pengelly",
            "title": "New York primaries: Nadler beats Maloney in bitter Democratic fight  The Guardian US",
            "description": "House judiciary chair declared the winner over House oversight chair in heavyweight bout as gerrymandered map causes upheaval",
            "url": "https://amp.theguardian.com/usnews/2022/aug/23/newyorkprimariesnadlermaloneydemocratsbiaggigoldmanmondairejones",
            "urlToImage": "https://i.guim.co.uk/img/media/97a139825c97d2814573b515207fb02059085e15/0_76_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=50b83e182bc4f035fa34c64fd47550bd",
            "publishedAt": "20220824T01:44:00Z",
            "content": "In an unpleasant end to a bitter New York Democratic primary on Tuesday, allies of two powerful House committee chairs traded nasty barbs before one saw a long career in Congress brought to an untime… [+4193 chars]"
        },
        {
            "source": {
                "id": "theverge",
                "name": "The Verge"
            },
            "author": "Mitchell Clark",
            "title": "Acer's Vero 514 brings its 'ecoconscious' concept to a Chromebook  The Verge",
            "description": "Acer promises that its Chromebook Vero 514 is an “ecoconscious” choice. While it’s a bit more complicated than that, it does at least seem like a decent laptop.",
            "url": "https://www.theverge.com/2022/8/23/23318956/acerchromebookvero514ecoconsciouslaptoprecycling",
            "urlToImage": "https://cdn.voxcdn.com/thumbor/hK5NvyK6jEB8tDgYI0H4ln0l2E=/0x277:3500x2109/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/23966748/Acer_Chromebook_Vero_514_Lifestyle_5.jpg",
            "publishedAt": "20220824T01:00:00Z",
            "content": "It also seems to have learned some lessons from its first Vero laptop\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nSo green.\r\nImage: Acer\r\nAcer… [+4409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Jenelle Evans Not Returning To 'Teen Mom'  TMZ",
            "description": "Jenelle Evans is not returning to MTV's \"Teen Mom\" and is instead developing a new show on a different network.",
            "url": "https://www.tmz.com/2022/08/23/jenelleevansnotreturningteenmomnewshowdifferentnetwork/",
            "urlToImage": "https://imagez.tmz.com/image/9a/16by9/2022/08/24/9a4a3d391c0f49ed98cb3419f996efc8_xl.jpg",
            "publishedAt": "20220824T00:40:00Z",
            "content": "Jenelle Evans is leaving \"Teen Mom\" and not looking back ... with her management telling us she's on to bigger and better things in the reality TV world.\r\nJenelle's manager, August Keen, tells TMZ ..… [+897 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Destiny 2: Lightfall  Official Reveal Trailer | gamescom 2022  IGN",
            "description": "Check out the reveal trailer for Destiny 2: Lightfall, available on February 28, 2023.Shattered glass glints in the starlight. Soldiers of the Shadow Legion ...",
            "url": "https://www.youtube.com/watch?v=BD0ugj5DWKc",
            "urlToImage": "https://i.ytimg.com/vi/BD0ugj5DWKc/maxresdefault.jpg",
            "publishedAt": "20220824T00:20:33Z",
            "content": null
        },
        {
            "source": {
                "id": "googlenews",
                "name": "Google News"
            },
            "author": null,
            "title": "Judge gives Trump until Friday to clarify request for special master on records seized by FBI  The Hill",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMikwFodHRwczovL3RoZWhpbGwuY29tL3JlZ3VsYXRpb24vY291cnQtYmF0dGxlcy8zNjEzMDM4LWp1ZGdlLWdpdmVzLXRydW1wLXVudGlsLWZyaWRheS10by1jbGFyaWZ5LXJlcXVlc3QtZm9yLXNwZWNpYWwtbWFzdGVyLW9uLXJlY29yZHMtc2VpemVkLWJ5LWZiaS_SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "20220824T00:06:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Watch Jennifer Lopez's REGAL Wedding Dresses Come to Life!  Entertainment Tonight",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGGeSQ4D_tiM",
            "urlToImage": null,
            "publishedAt": "20220824T00:00:09Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Vox"
            },
            "author": "Sara Morrison",
            "title": "What Twitter whistleblower Peiter Zatko said about Elon Musk’s bot problems  Vox.com",
            "description": "The former Twitter employee is accusing the company of lying to just about everyone.",
            "url": "https://www.vox.com/recode/2022/8/23/23318503/twitterwhistleblowerpeitermudgezatkoelonmuskbots",
            "urlToImage": "https://cdn.voxcdn.com/thumbor/8EINFjoQxokzhgVgjqL5SAkNozU=/0x645:4500x3001/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/23966844/1242323294.jpg",
            "publishedAt": "20220823T23:45:54Z",
            "content": "When Peiter Zatko, the famous hacker best known as Mudge, got the job heading up Twitters security in November 2020, internet archivist Jason Scott tweeted, you have my full support to walk away afte… [+7991 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "New York congressional candidate Pat Ryan discusses his race  CBS News",
            "description": "Democrat Pat Ryan is facing off against Republican Marc Molinaro in a special election in New York's 19th Congressional District. Ryan joins \"Red and Blue\" t...",
            "url": "https://www.youtube.com/watch?v=dWoC4iHCjWI",
            "urlToImage": "https://i.ytimg.com/vi/dWoC4iHCjWI/maxresdefault.jpg",
            "publishedAt": "20220823T23:31:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Nasa releases audio of what a black hole 'sounds' like  Guardian News",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_tXhBLg3Wng",
            "urlToImage": null,
            "publishedAt": "20220823T23:11:22Z",
            "content": null
        }
    ]

    return (
        <div className='container my3'>
            <h2>Newpigeon</h2>
            <div className='row'>
                {article.map((element) => {
                    return <div className='col-md-4'><Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://www.rediff.com/movies/review/kgf-chapter-2-review/20220414.htm"} url={element.url} />
                    </div>
                })}
            </div>

        </div>
    )
}

export default News
