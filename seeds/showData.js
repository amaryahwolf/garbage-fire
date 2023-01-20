const { Show } = require('../models')

const showdata = [
    {
        title: "Real Housewives of Potomac",
        years_running: "2016-Present",
        description: "The Real Housewives of Potomac is a reality television series on Bravo and is set in Potomac, Maryland, a suburb of Washington, D.C. The series follows the friendships, relationships, and personal and professional lives of the women, and often includes their interactions with their significant others, children and other family members. The cast members have included Gizelle Bryant, Karen Huger, Ashley Darby, Robyn Dixon, Monique Samuels, and Candiace Dillard Bassett. The series has been popular among audiences and has been praised for its diverse cast and their dynamic personalities.",
        filename: "real-housewives-potomac.jpeg"
    },
    {
        title: "RuPaul's Drag Race",
        years_running: "2009-Present",
        description: "RuPaul's Drag Race is a reality competition television series created by RuPaul Charles. It premiered on the Logo network in 2009, moved to VH1 and now airs on MTV. The show features drag queens competing in various challenges to win the title of 'America's Next Drag Superstar' and a cash prize. Each season includes a diverse cast of contestants, many of whom have become well-known in the drag community. The show has been praised for its representation of the LGBTQ+ community and its positive impact on drag culture. Additionally, the show has been credited with helping to mainstream drag and increase its popularity in mainstream media.",
        filename: "rupauls-drag-race.jpg"
    },
    {
        title: "Selling Sunset",
        years_running: "2019-Present",
        description: "Selling Sunset is an American reality television series that premiered on Netflix on March 21, 2019. The show follows the lives and careers of the real estate agents at the Oppenheim Group, a real estate brokerage located in Los Angeles, California. The show focuses on the high-end luxury properties that are listed and sold by the agents, as well as their personal and professional lives. The series has been praised for its depiction of the luxury real estate market and its portrayal of the agents' high-stakes, high-drama careers.",
        filename: "selling-sunset.jpg"
    },
    {
        title: "The Bachelorette",
        years_running: "2003-Present",
        description: "The Bachelorette is a reality dating competition television series that first premiered on ABC in 2003. The show follows a single bachelorette as she goes on a series of dates with a group of men, narrowing them down each week until only one remains. The show is a spin-off of the popular series The Bachelor and has been a staple on ABC's reality television lineup. The Bachelorette has been praised for its portrayal of strong, independent women and its diverse cast of contestants. The series has also been criticized for its unrealistic portrayal of relationships and its lack of diversity among the lead bachelorettes. Despite the criticism the series has been popular among the audiences and has been on-air for many seasons.",
        filename: "bachelorette.jpg"
    },
    {
        title: "Single's Inferno",
        years_running: "2021-Present",
        description: "Single's Inferno is a reality dating competition television series that premiered on Netflix on December 18, 2021. The show follows a group of Korean singles on a search for love while stranded on an island. The singles are tasked with gathering their own food, water and shelter while searching for a love match. If a pair expresses interest, they are taken to 'Paradise' - a night at a luxury hotel where they can explore their connection. Watch the drama unfold.",
        filename: "singles-inferno.jpeg"
    },
    {
        title: "Too Hot to Handle",
        years_running: "2020-Present",
        description: "Too Hot to Handle is a reality dating competition television series that premiered on Netflix on April 17, 2020. The show features a group of young, attractive singles who are sent to a tropical paradise to compete for a cash prize. However, they are told that any physical contact between contestants is strictly prohibited, and any infractions will result in a reduction of the prize money. The show explores the contestants' attempts to form emotional connections while resisting physical temptation. The series has been praised for its unique concept and its exploration of the role of physical attraction in dating. ",
        filename: "too-hot-to-handle.jpg"
    },
    {
        title: "Hell's Kitchen",
        years_running: "2005-Present",
        description: "Hell's Kitchen is a reality cooking competition television series that first premiered on Fox in 2005. The show is hosted by chef Gordon Ramsay and features a group of professional chefs competing in various challenges to win the title of 'Head Chef' at a prestigious restaurant. The show is known for its intense and competitive atmosphere, as well as Ramsay's strict and often volatile criticism of the contestants. The series has been popular among audiences and has been praised for its portrayal of the high-pressure world of professional cooking.",
        filename: "hells-kitchen.jpg"
    },
    {
        title: "Naked and Afraid",
        years_running: "2013-Present",
        description: "Naked and Afraid is a reality survival television series that premiered on the Discovery Channel in 2013. The show features a man and a woman, who are survival experts, as they are dropped off in a remote location with no clothes and minimal gear, and are left to survive for 21 days. The show is known for its raw and unscripted nature, as well as its depiction of the harsh realities of survival in the wilderness. The series has been praised for its realistic portrayal of the challenges of survival and for its focus on the contestants' mental and physical resilience.",
        filename: "naked-afraid.jpg"
    },
    {
        title: "The Great British Bake Off",
        years_running: "2010-Present",
        description: "The Great British Bake Off is a British television series that first premiered on BBC in 2010. The show features a group of amateur bakers competing in a series of challenges to be crowned the 'Star Baker' and win the series. The show is known for its friendly and lighthearted atmosphere, as well as its focus on traditional British baking. The series has been praised for its emphasis on technical skill and attention to detail in baking, as well as for its representation of diverse contestants and its positive and uplifting tone.",
        filename: "great-british-bakeoff.jpeg"
    },
    {
        title: "Dance Moms",
        years_running: "2011-2019",
        description: "Dance Moms is an American reality television series that premiered on Lifetime in 2011. The show follows the competitive dance team at Abby Lee Dance Company in Pittsburgh, Pennsylvania, under the tutelage of instructor Abby Lee Miller, as well as the relationships between Miller, the dancers and their mothers. The show is known for its dramatic and often-contentious atmosphere, as well as its depiction of the intense and competitive world of competitive dance.",
        filename: "dance-moms.jpeg"
    },
];

const seedShows = () => Show.bulkCreate(showdata);

module.exports = seedShows;