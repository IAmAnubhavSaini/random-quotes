var app = angular.module('randomQuotes', []);

app.controller("RandomQuotesController", function () {
    this.Quotes = Quotes;
    this.randomQuote = function () {
        var len = this.Quotes.length;
        var randomIndex = Math.floor(Math.random() * len);
        return this.Quotes[randomIndex];
    };
});

var Quotes = [
    {
        "quote": "I think, fundamentally, open source does tend to be more stable software. It's the right way to do things.",
        "quoter": "Linus Torvalds",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "The strategic marketing paradigm of Open Source is a massively-parallel drunkard's walk filtered by a Darwinistic process.",
        "quoter": "Bruce Perens",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "We have a very active testing community which people don't often think about when you have open source.",
        "quoter": "Mitchell Baker",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "For me, open source is a moral thing.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "If you want to build an open source project, you can't let your ego stand in the way. You can't rewrite everybody's patches, you can't second-guess everybody, and you have to give people equal control.",
        "quoter": "Rasmus Lerdorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "In real open source, you have the right to control your own destiny.",
        "quoter": "Linus Torvalds",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Open source can propagate to fill all the nooks and crannies that people want it to fill.",
        "quoter": "Mitch Kapor",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "I often compare open source to science. To where science took this whole notion of developing ideas in the open and improving on other peoples' ideas and making it into what science is today and the incredible advances that we have had. And I compare that to witchcraft and alchemy, where openness was something you didn't do.",
        "quoter": "Linus Torvalds",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Certainly there's a phenomenon around open source. You know free software will be a vibrant area. There will be a lot of neat things that get done there.",
        "quoter": "Bill Gates",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "In open source, we feel strongly that to really do something well, you have to get a lot of people involved.",
        "quoter": "Linus Torvalds",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "If you think of the ideas of open source applied to information in an encyclopedia, you get to Wikipedia - lots and lots of small contributions that bubble up to something that's meaningful.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "The Internet browser is the most susceptible to viruses. The browser is naive about downloading and executing software. Google is trying to help by releasing the Chrome browser as open source.",
        "quoter": "Vint Cerf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Intellectual property is an important legal and cultural issue. Society as a whole has complex issues to face here: private ownership vs. open source, and so on.",
        "quoter": "Tim Berners-Lee",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Al Qaeda is nothing more than a mutant supply chain. They're playing off the same platform as Wal-Mart and Dell. They're just not restrained by it. What is al Qaeda? It's an open source religious political movement that works off the global supply chain. That's what we're up against in Iraq. We're up against a suicide supply chain.",
        "quoter": "Thomas Friedman",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Open source is a beautiful way of collaborating; but what's happening on the free Internet is more akin to the 'crowdsourcing' of journalists and other content creators by advertisers who no longer have to pay them - only the search engines that parse their articles.",
        "quoter": "Douglas Rushkoff",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "I think the way IBM has embraced the open source philosophy has been quite astonishing, but gratifying. I hope they'll do very well with it.",
        "quoter": "Larry Wall",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts.",
        "quoter": "Tim O'Reilly",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "We're not done yet, but two things WordPress has been able to exemplify is that open source can create great user experiences and that it's possible to have a successful commercial entity and a wider free software community living and working in harmony.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "One thing about open source is that even the failures contribute to the next thing that comes up. Unlike a company that could spend a million dollars in two years and fail and there's nothing really to show for it, if you spend a million dollars on open source, you probably have something amazing that other people can build on.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "When I first got into technology I didn't really understand what open source was. Once I started writing software, I realized how important this would be.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "EdX will be a creating a platform which will be open source, not for profit, and a portal for a website where universities will offer their courses. For example, MIT courses will be offered as MITx and Harvard courses as HarvardX.",
        "quoter": "Anant Agarwal",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Companies have been trying to figure out what it is that makes open source work.",
        "quoter": "Brian Behlendorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "There were open source projects and free software before Linux was there. Linux in many ways is one of the more visible and one of the bigger technical projects in this area, and it changed how people looked at it because Linux took both the practical and ideological approach.",
        "quoter": "Linus Torvalds",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "What is al Qaeda? It's an open source religious political movement that works off the global supply chain.",
        "quoter": "Thomas Friedman",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Al Qaeda is nothing more than a mutant supply chain. They're playing off the same platform as Wal-Mart and Dell. They're just not restrained by it. What is al Qaeda? It's an open source religious political movement that works off the global supply chain.",
        "quoter": "Thomas Friedman",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "There are two main methodologies of open source development. There's the Apache model, which is design by committee - great for things like web servers. Then you have the benevolent dictator model. That's what Ubuntu is doing, with Mark Shuttleworth.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source.html"
    },
    {
        "quote": "Basically, if reverse engineering is banned, then a lot of the open source community is doomed to fail.",
        "quoter": "Jon Johansen",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_3.html"
    },
    {
        "quote": "Huge open source organizations like Red Hat and Mozilla manage the collaboration of hundreds of people who don't know one another and have spent no time hanging around the water cooler.",
        "quoter": "Margaret Heffernan",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The biggest challenge for open source is that as it enters the consumer market, as projects like WordPress and Firefox have done, you have to create a user experience that is on par or better than the proprietary alternatives.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "Open source production has shown us that world-class software, like Linux and Mozilla, can be created with neither the bureaucratic structure of the firm nor the incentives of the marketplace as we've known them.",
        "quoter": "Howard Rheingold",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "Philip Greenspun had a huge impact on me. He was the first person I knew of that embraced online communities, created a real business around open source, gave back to the community through education, and inspired me to explore photography.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "Many users of the GNU/Linux system will not have heard the ideas of free software. They will not be aware that we have ideas, that a system exists because of ethical ideals, which were omitted from ideas associated with the term 'open source.'",
        "quoter": "Richard Stallman",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The more money Automattic makes, the more we invest into Free and Open Source software that belongs to everybody and services to make that software sing.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "WordPress.com is the only service of its kind that not only lets you export your data, but gives you an open source package you can run on pretty much any web host out there to run your own instance of the software. So the freedom is really in your hands.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The name Firefox is not part of the open source licence, and that's why it's important to us.",
        "quoter": "Mitchell Baker",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "Many people think that open source projects are sort of chaotic and and anarchistic. They think that developers randomly throw code at the code base and see what sticks.",
        "quoter": "Mitchell Baker",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "I would never jeopardize classified information to be brought out to the public. This information is all open source. There is no reason to worry about classification. It is simply an attempt by bureaucrats to cover their rear ends.",
        "quoter": "Curt Weldon",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "What's kept Java from being used as widely as possible is there hasn't been an Open Source implementation of it that's gotten really widespread use.",
        "quoter": "Brian Behlendorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The question of trademark is pretty unsettled in the open source world. The trademark is important in a consumer product, but there are a few groups who feel it's a restriction they can't live with.",
        "quoter": "Mitchell Baker",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "We do care about control and privacy. It's one of the reasons we are so focused on having our systems be open source, so you or someone technically savvy you know can verify what the software is doing.",
        "quoter": "Mitchell Baker",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "Open platforms historically undergo a lot of scrutiny, but there are a lot of advantages to having an open source platform from a security standpoint.",
        "quoter": "Sundar Pichai",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "People who study primate societies make a distinction between two kinds of cultural interactions, agonic and hedonic. In agonic societies, you gain status by asserting dominance over others. In hedonic societies, you gain status by drawing attention to yourself. Open source is a hedonic culture.",
        "quoter": "Eric S. Raymond",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "Success for open source is when the term 'open source' becomes a non-factor in the decision making process, when people hear about Linux and compare it to Windows NT, and they compare it on the feature set and don't have much of an excuse not to use it.",
        "quoter": "Brian Behlendorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "It's amazing what you can get on open source now if you actually use the right search engines to find the material.",
        "quoter": "Gus O'Donnell",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "In true open source development, there's lots of visibility all the way through the development process.",
        "quoter": "Brian Behlendorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "I won't sit here and say an Open Source project will do things faster than a closed source, but one of the reasons why is that it sits on a whole lot of things that came before it.",
        "quoter": "Brian Behlendorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "I'm not of the opinion that all software will be open source software. There is certain software that fits a niche that is only useful to a particular company or person: for example, the software immediately behind a web site's user interface. But the vast majority of software is actually pretty generic.",
        "quoter": "Brian Behlendorf",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The free sharing and teaching of open source is incompatible with the notion of the solitary genius.",
        "quoter": "Golan Levin",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "If you are in this business long enough, you hear about a thousand things that are going to kill you. Open source? Yeah, we are not dead yet. Cloud? That's not new; it's a new name.",
        "quoter": "Safra A. Catz",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "It seems like the web, particularly software as a service, provides ample opportunities for you to flourish economically, completely aligned with the broader open source community.",
        "quoter": "Matt Mullenweg",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The accomplishment of open source is that it is the back end of the web, the invisible part, the part that you don't see as a user.",
        "quoter": "Mitch Kapor",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "The main languages out of which web applications are built - whether it's Perl or Python or PHP or any of the other languages - those are all open source languages. So the infrastructure of the web is open source... the web as we know it is completely dependent on open source.",
        "quoter": "Mitch Kapor",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "All of our code is open source, so it can be used for other projects.",
        "quoter": "Miguel de Icaza",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_2.html"
    },
    {
        "quote": "I think open source is an evolutionary idea for humanity, this idea of transparency. It played out for us in the technology world, but it also played out with the idea of a truth and reconciliation commission and Wikipedia.",
        "quoter": "Megan Smith",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_3.html"
    },
    {
        "quote": "Android phones in China are more 'Android open source' rather than Android in the way we are all used to here. So a lot of phones don't have Google Play, etc.",
        "quoter": "Sundar Pichai",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_3.html"
    },
    {
        "quote": "When my co-founder and I first had the idea for IronPort, an email security company, we triangulated a list of the 20 most relevant people in email - former CEOs, open source technologists, investors and thought leaders.",
        "quoter": "Scott Weiss",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_3.html"
    },
    {
        "quote": "In open source, you really have to be near the watershed to have an impact on the source code. Customers want to be near the key contributors to the code, not a level removed.",
        "quoter": "Peter Fenton",
        "source": "https://www.brainyquote.com/quotes/keywords/open_source_3.html"
    },
];
