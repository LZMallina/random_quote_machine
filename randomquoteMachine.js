//Have the background change hexcode colors randomly upon click
//randomly provide quotes

const color = [
    '#48d0ea','#bc770b','#999dd7','#55c2e5','#b9afb6','#c40a2f','#854d3a','#fd9f68','#331bb2','#0b8310','#d2e6eb','#8220bd'
];

const verse = [
    { quote:'He is your praise; he is your God, who performed for you those great and awesome wonders you saw with your own eyes.', book:'Deuteronomy 10:21'},
    { quote:"Produce fruit in keeping with repentance.", book:"Matthew 3:8"},
    { quote:'Put on the full armor of God, so that you can take your stand against the devil\'s schemes.', book:'Ephesians 6:11'},
    { quote:'Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.', book:'Matthew 5:10'},
    { quote:'For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.', book:'Isaiah 41:13'},
    { quote:'What, then, shall we say in response to these things? If God is for us, who can be against us?', book:'Romans 8:31'},
    { quote:'Do not be wise in your own eyes; fear the Lord and shun evil. This will bring health to your body and nourishment to your bones', book:'Proverbs 3:7-8'},
    { quote:'What shall we say, then? Shall we go on sinning so that grace may increase? By no means! We are those who have died to sin; how can we live in it any longer?', book:'Romans 6:1-2'},
    { quote:'Do not lie to each other, since you have taken off your old self with its practices and have put on the new self, which is being renewed in knowledge in the image of its Creator.', book:'Colossians 3:9'},
    { quote:'So he said to me, "\This is the word of the Lord to Zerubbabel: "\Not by might nor by power, but by my Spirit,\" says the Lord Almighty.\"', book:'Zechariah 4:6' },
    { quote:'But in fact the ministry Jesus has received is as superior to theirs as the covenant of which he is mediator is superior to the old one, since the new covenant is established on better promises.', book:'Hebrews 8:6'},
    { quote:'The Lord will vindicate me; your love, Lord, endures forever-do not abandon the works of your hands.', book:'Psalm 138:8'},
    { quote:'A generous person will prosper; whoever refreshes others will be refreshed.', book:'Proverbs 11:25'},
    { quote:'What is mankind that you are mindful of them, human beings that you care for them?', book:'Psalm 8:4'},
    { quote:'He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.', book:'1 John 2:2'},
    { quote:'This is what the Lord says to Israel: "\Seek me and live.\"', book:'Amos 5:4'},
    { quote:'I love the Lord, for he heard my voice; he heard my cry for mercy. Because he turned his ear to me, I will call on him as long as I live.', book:'Psalm 116:1-2'},
    { quote:'They devoted themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer.', book:'Acts 2:42'},
    { quote:'For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that.', book:'1 Timothy 6:7-8'},
    { quote:'Blessed are the peacemakers,for they will be called children of God.', book:'Matthew 5:9' },
    { quote:'For the word of the Lord is right and true; he is faithful in all he does.', book:'Psalm 33:4'},
    { quote:'To our God and Father be glory for ever and ever. Amen.', book:'Philippians 4:20'},
    { quote:'Words from the mouth of the wise are gracious, but fools are consumed by their own lips.', book:'Ecclesiastes 10:12'},
    { quote:'However, each one of you also must love his wife as he loves himself, and the wife must respect her husband.', book:'Ephesians 5:33'},
    { quote:'Be wise in the way you act toward outsiders; make the most of every opportunity. Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone.', book:'Colossians 4:5-6'}
]


$(document).ready(function () {
    $("button").click(function () {
        let varColor = color[Math.floor(Math.random() * color.length)];
        $("body, #new-quote, i").css(
            "background-color", varColor);
        $("#text, #author").css("color", varColor)

        let index = Math.floor(Math.random() * verse.length);
        $('#text').text(verse[index].quote);
        $('#author').text(verse[index].book); 
        $("button").css("outline","none")
    })
})

