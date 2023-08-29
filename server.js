const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthdate': '22 October 1992', 
        'birthLocation': 'London, England',
        'origin': 'Atlanta, Georgia',
        'genre': 'hip hop, trap, rap, horrorcore',
        'occupation': 'rapper, songwriter, record producer',
        'yearsActive': '2013-present',
        'labels': 'Epic, Slaughter Gang',
        'children': 3
    },
    'Ariana Grande': {
        'age': 28,
        'birthName': 'Ariana Grande-Butera',
        'birthdate': '26 June 1993',
        'birthLocation': 'Boca Raton, Florida, USA',
        'origin': 'Boca Raton, Florida, USA',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, actress',
        'yearsActive': '2008-present',
        'labels': 'Republic',
        'children': 0
    },
    'Kanye West': {
        'age': 44,
        'birthName': 'Kanye Omari West',
        'birthdate': '8 June 1977',
        'birthLocation': 'Atlanta, Georgia, USA',
        'origin': 'Chicago, Illinois, USA',
        'genre': 'Hip hop, rap',
        'occupation': 'Rapper, record producer, fashion designer',
        'yearsActive': '1996-present',
        'labels': 'Roc-A-Fella, GOOD Music, Def Jam',
        'children': 4
    },
    'Lady Gaga': {
        'age': 36,
        'birthName': 'Stefani Joanne Angelina Germanotta',
        'birthdate': '28 March 1986',
        'birthLocation': 'New York City, New York, USA',
        'origin': 'New York City, New York, USA',
        'genre': 'Pop, dance',
        'occupation': 'Singer, songwriter, actress',
        'yearsActive': '2001-present',
        'labels': 'Interscope',
        'children': 0
    },
    'Jay-Z': {
        'age': 53,
        'birthName': 'Shawn Corey Carter',
        'birthdate': '4 December 1969',
        'birthLocation': 'Brooklyn, New York, USA',
        'origin': 'Brooklyn, New York, USA',
        'genre': 'Hip hop, rap',
        'occupation': 'Rapper, businessman',
        'yearsActive': '1986-present',
        'labels': 'Roc-A-Fella, Roc Nation, Def Jam',
        'children': 3
    },
    'Billie Eilish': {
        'age': 20,
        'birthName': "Billie Eilish Pirate Baird O'Connell",
        'birthdate': '18 December 2001',
        'birthLocation': 'Los Angeles, California, USA',
        'origin': 'Los Angeles, California, USA',
        'genre': 'Pop, electropop',
        'occupation': 'Singer-songwriter',
        'yearsActive': '2015-present',
        'labels': 'Darkroom, Interscope',
        'children': 0
    },
    'Ed Sheeran': {
        'age': 31,
        'birthName': 'Edward Christopher Sheeran',
        'birthdate': '17 February 1991',
        'birthLocation': 'Halifax, West Yorkshire, England',
        'origin': 'Framlingham, Suffolk, England',
        'genre': 'Pop, folk, acoustic',
        'occupation': 'Singer-songwriter',
        'yearsActive': '2004-present',
        'labels': 'Asylum, Atlantic',
        'children': 1
    },
    'Post Malone': {
        'age': 26,
        'birthName': 'Austin Richard Post',
        'birthdate': '4 July 1995',
        'birthLocation': 'Syracuse, New York, USA',
        'origin': 'Grapevine, Texas, USA',
        'genre': 'Hip hop, pop, rock',
        'occupation': 'Singer, rapper, songwriter',
        'yearsActive': '2013-present',
        'labels': 'Republic',
        'children': 0
    },
    'Cardi B': {
        'age': 29,
        'birthName': 'Belcalis Marlenis Almánzar',
        'birthdate': '11 October 1992',
        'birthLocation': 'The Bronx, New York, USA',
        'origin': 'The Bronx, New York, USA',
        'genre': 'Hip hop, rap',
        'occupation': 'Rapper, songwriter, actress',
        'yearsActive': '2015-present',
        'labels': 'Atlantic',
        'children': 1
    },
    'Justin Bieber': {
        'age': 27,
        'birthName': 'Justin Drew Bieber',
        'birthdate': '1 March 1994',
        'birthLocation': 'London, Ontario, Canada',
        'origin': 'Stratford, Ontario, Canada',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2007-present',
        'labels': 'RBMG, Def Jam',
        'children': 0
    },
    'Ricky Martin': {
        'age': 50,
        'birthName': 'Enrique Martín Morales',
        'birthdate': '24 December 1971',
        'birthLocation': 'San Juan, Puerto Rico',
        'origin': 'San Juan, Puerto Rico',
        'genre': 'Latin pop, pop',
        'occupation': 'Singer, actor',
        'yearsActive': '1984-present',
        'labels': 'Sony Latin, Columbia',
        'children': 4
    },
    'Nicki Minaj': {
        'age': 39,
        'birthName': 'Onika Tanya Maraj',
        'birthdate': '8 December 1982',
        'birthLocation': 'Saint James, Trinidad and Tobago',
        'origin': 'Queens, New York, USA',
        'genre': 'Hip hop, rap',
        'occupation': 'Rapper, singer, songwriter',
        'yearsActive': '2004-present',
        'labels': 'Young Money, Cash Money, Republic',
        'children': 1
    },
    'chance the rapper':{
        'age': 28,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthdate': 'April 16, 1993', 
        'birthLocation': 'London, England',
        'origin': 'Chicago, Illinois',
        'genre': 'hip hop, alternative hip hop, r & b',
        'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
        'yearsActive': '2011-present',
        'labels': 'none',
        'children': 0
    },
    'Enrique Iglesias': {
        'age': 47,
        'birthName': 'Enrique Miguel Iglesias Preysler',
        'birthdate': '8 May 1975',
        'birthLocation': 'Madrid, Spain',
        'origin': 'Miami, Florida, USA',
        'genre': 'Latin pop, dance, R&B',
        'occupation': 'Singer, songwriter',
        'yearsActive': '1995-present',
        'labels': 'Sony Music Latin, RCA',
        'children': 3
    },
    'Christina Aguilera': {
        'age': 41,
        'birthName': 'Christina Maria Aguilera',
        'birthdate': '18 December 1980',
        'birthLocation': 'Staten Island, New York, USA',
        'origin': 'Rochester, Pennsylvania, USA',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, songwriter, actress',
        'yearsActive': '1993-present',
        'labels': 'RCA',
        'children': 2
    },
    'John Legend': {
        'age': 43,
        'birthName': 'John Roger Stephens',
        'birthdate': '28 December 1978',
        'birthLocation': 'Springfield, Ohio, USA',
        'origin': 'Philadelphia, Pennsylvania, USA',
        'genre': 'R&B, soul, pop',
        'occupation': 'Singer, songwriter, pianist',
        'yearsActive': '2000-present',
        'labels': 'Columbia, GOOD Music',
        'children': 2
    },
    'Miley Cyrus': {
        'age': 29,
        'birthName': 'Destiny Hope Cyrus',
        'birthdate': '23 November 1992',
        'birthLocation': 'Franklin, Tennessee, USA',
        'origin': 'Los Angeles, California, USA',
        'genre': 'Pop, rock',
        'occupation': 'Singer, actress',
        'yearsActive': '2001-present',
        'labels': 'RCA, Smiley Miley, Columbia',
        'children': 0
    },
    'One Direction': {
        'age': 32,
        'birthName': 'One Direction',
        'birthdate': '2010',
        'birthLocation': 'London, England',
        'origin': 'London, England',
        'genre': 'Pop',
        'occupation': 'Band',
        'yearsActive': '2010-2016',
        'labels': 'Syco, Columbia',
        'children': 0
    },
    'Mariah Carey': {
        'age': 52,
        'birthName': 'Mariah Angela Carey',
        'birthdate': '27 March 1969',
        'birthLocation': 'Huntington, New York, USA',
        'origin': 'New York City, New York, USA',
        'genre': 'R&B, pop',
        'occupation': 'Singer, songwriter, actress',
        'yearsActive': '1988-present',
        'labels': 'Columbia, Epic',
        'children': 2
    },
    'G-Eazy': {
        'age': 32,
        'birthName': 'Gerald Earl Gillum',
        'birthdate': '24 May 1989',
        'birthLocation': 'Oakland, California, USA',
        'origin': 'Oakland, California, USA',
        'genre': 'Hip hop, rap',
        'occupation': 'Rapper, songwriter',
        'yearsActive': '2008-present',
        'labels': 'BPG, RCA, Interscope',
        'children': 0
    },
    'Katy Perry': {
        'age': 37,
        'birthName': 'Katheryn Elizabeth Hudson',
        'birthdate': '25 October 1984',
        'birthLocation': 'Santa Barbara, California, USA',
        'origin': 'Santa Barbara, California, USA',
        'genre': 'Pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2001-present',
        'labels': 'Capitol',
        'children': 1
    },
    'Elton John': {
        'age': 75,
        'birthName': 'Reginald Kenneth Dwight',
        'birthdate': '25 March 1947',
        'birthLocation': 'Pinner, Middlesex, England',
        'origin': 'London, England',
        'genre': 'Pop, rock',
        'occupation': 'Singer, songwriter, pianist',
        'yearsActive': '1962-present',
        'labels': 'Rocket, MCA, Geffen',
        'children': 2
    },
    'Shakira': {
        'age': 44,
        'birthName': 'Shakira Isabel Mebarak Ripoll',
        'birthdate': '2 February 1977',
        'birthLocation': 'Barranquilla, Colombia',
        'origin': 'Barranquilla, Colombia',
        'genre': 'Pop, Latin',
        'occupation': 'Singer, songwriter',
        'yearsActive': '1990-present',
        'labels': 'Sony Latin, Epic',
        'children': 2
    },
    'Drake': {
        'age': 35,
        'birthName': 'Aubrey Drake Graham',
        'birthdate': '24 October 1986',
        'birthLocation': 'Toronto, Ontario, Canada',
        'origin': 'Toronto, Ontario, Canada',
        'genre': 'Hip hop, R&B',
        'occupation': 'Rapper, singer, songwriter',
        'yearsActive': '2001-present',
        'labels': 'OVO Sound, Republic',
        'children': 1
    },
    'FKA twigs': {
        'age': 33,
        'birthName': 'Tahliah Debrett Barnett',
        'birthdate': '16 January 1988',
        'birthLocation': 'Cheltenham, Gloucestershire, England',
        'origin': 'London, England',
        'genre': 'Art pop, electronic',
        'occupation': 'Singer, songwriter, dancer',
        'yearsActive': '2012-present',
        'labels': 'Young Turks, Beggars Group',
        'children': 0
    },
    'Mumford & Sons': {
        'age': 35,
        'birthName': 'Mumford & Sons',
        'birthdate': '2007',
        'birthLocation': 'London, England',
        'origin': 'London, England',
        'genre': 'Folk rock, indie folk',
        'occupation': 'Band',
        'yearsActive': '2007-present',
        'labels': 'Gentlemen of the Road, Island',
        'children': 0
    },
    'Florence + The Machine': {
        'age': 35,
        'birthName': 'Florence + The Machine',
        'birthdate': '2007',
        'birthLocation': 'London, England',
        'origin': 'London, England',
        'genre': 'Indie pop, art rock',
        'occupation': 'Band',
        'yearsActive': '2007-present',
        'labels': 'Island, Universal Republic',
        'children': 0
    },
    'Maroon 5': {
        'age': 42,
        'birthName': 'Maroon 5',
        'birthdate': '1994',
        'birthLocation': 'Los Angeles, California, USA',
        'origin': 'Los Angeles, California, USA',
        'genre': 'Pop rock, funk rock',
        'occupation': 'Band',
        'yearsActive': '1994-present',
        'labels': '222, Interscope',
        'children': 0
    },
    'Bebe Rexha': {
        'age': 32,
        'birthName': 'Bleta Rexha',
        'birthdate': '30 August 1989',
        'birthLocation': 'Brooklyn, New York, USA',
        'origin': 'Staten Island, New York, USA',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2010-present',
        'labels': 'Warner Bros., XO',
        'children': 0
    },
    'Usher': {
        'age': 43,
        'birthName': 'Usher Raymond IV',
        'birthdate': '14 October 1978',
        'birthLocation': 'Dallas, Texas, USA',
        'origin': 'Chattanooga, Tennessee, USA',
        'genre': 'R&B, pop',
        'occupation': 'Singer, songwriter, actor',
        'yearsActive': '1994-present',
        'labels': 'LaFace, Arista, RCA',
        'children': 3
    },
    'Dua Lipa': {
        'age': 26,
        'birthName': 'Dua Lipa',
        'birthdate': '22 August 1995',
        'birthLocation': 'London, England',
        'origin': 'London, England',
        'genre': 'Pop, dance',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2015-present',
        'labels': 'Warner, WEA',
        'children': 0
    },
    'Zayn Malik': {
        'age': 29,
        'birthName': 'Zain Javadd Malik',
        'birthdate': '12 January 1993',
        'birthLocation': 'Bradford, West Yorkshire, England',
        'origin': 'Bradford, West Yorkshire, England',
        'genre': 'R&B, pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2010-present',
        'labels': 'RCA, Columbia',
        'children': 1
    },
    'Rihanna': {
        'age': 34,
        'birthName': 'Robyn Rihanna Fenty',
        'birthdate': '20 February 1988',
        'birthLocation': 'Saint Michael, Barbados',
        'origin': 'Saint Michael, Barbados',
        'genre': 'R&B, pop, reggae',
        'occupation': 'Singer, songwriter, actress, businesswoman',
        'yearsActive': '2003-present',
        'labels': 'Def Jam, Roc Nation',
        'children': 0
    },
    'Avril Lavigne': {
        'age': 37,
        'birthName': 'Avril Ramona Lavigne',
        'birthdate': '27 September 1984',
        'birthLocation': 'Belleville, Ontario, Canada',
        'origin': 'Napanee, Ontario, Canada',
        'genre': 'Pop punk, alternative rock',
        'occupation': 'Singer, songwriter',
        'yearsActive': '1999-present',
        'labels': 'Arista, RCA, Epic',
        'children': 0
    },
    'Demi Lovato': {
        'age': 29,
        'birthName': 'Demetria Devonne Lovato',
        'birthdate': '20 August 1992',
        'birthLocation': 'Albuquerque, New Mexico, USA',
        'origin': 'Dallas, Texas, USA',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, songwriter, actress',
        'yearsActive': '2002-present',
        'labels': 'Island, Hollywood',
        'children': 0
    },
    'Justin Timberlake': {
        'age': 41,
        'birthName': 'Justin Randall Timberlake',
        'birthdate': '31 January 1981',
        'birthLocation': 'Memphis, Tennessee, USA',
        'origin': 'Millington, Tennessee, USA',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, songwriter, actor',
        'yearsActive': '1992-present',
        'labels': 'Jive, RCA',
        'children': 2
    },
    'Amy Winehouse': {
        'age': 27,
        'birthName': 'Amy Jade Winehouse',
        'birthdate': '14 September 1983',
        'birthLocation': 'Southgate, London, England',
        'origin': 'London, England',
        'genre': 'Soul, R&B, jazz',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2003-2011',
        'labels': 'Island, Universal Republic',
        'children': 0
    },
    'Eminem': {
        'age': 50,
        'birthName': 'Marshall Bruce Mathers III',
        'birthdate': '17 October 1972',
        'birthLocation': 'St. Joseph, Missouri, USA',
        'origin': 'Detroit, Michigan, USA',
        'genre': 'Hip hop, rap',
        'occupation': 'Rapper, songwriter, record producer',
        'yearsActive': '1988-present',
        'labels': 'Aftermath, Shady, Interscope',
        'children': 3
    },
    'Britney Spears': {
        'age': 40,
        'birthName': 'Britney Jean Spears',
        'birthdate': '2 December 1981',
        'birthLocation': 'McComb, Mississippi, USA',
        'origin': 'Kentwood, Louisiana, USA',
        'genre': 'Pop, dance',
        'occupation': 'Singer, dancer, actress',
        'yearsActive': '1992-present',
        'labels': 'Jive, RCA',
        'children': 2
    },
    'Burna Boy': {
        'age': 30,
        'birthName': 'Damini Ebunoluwa Ogulu',
        'birthdate': '2 July 1991',
        'birthLocation': 'Port Harcourt, Rivers State, Nigeria',
        'origin': 'Port Harcourt, Rivers State, Nigeria',
        'genre': 'Afro-fusion, reggae, dancehall',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2011-present',
        'labels': 'Spaceship, Atlantic',
        'children': 0
    },
    'Wizkid': {
        'age': 31,
        'birthName': 'Ayodeji Ibrahim Balogun',
        'birthdate': '16 July 1990',
        'birthLocation': 'Surulere, Lagos, Nigeria',
        'origin': 'Surulere, Lagos, Nigeria',
        'genre': 'Afrobeats, reggae, pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2001-present',
        'labels': 'Starboy, RCA',
        'children': 3
    },
    'Davido': {
        'age': 29,
        'birthName': 'David Adedeji Adeleke',
        'birthdate': '21 November 1992',
        'birthLocation': 'Atlanta, Georgia, USA',
        'origin': 'Lagos, Nigeria',
        'genre': 'Afrobeats, pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2011-present',
        'labels': 'DMW, Sony Music',
        'children': 3
    },
    'Tiwa Savage': {
        'age': 41,
        'birthName': 'Tiwatope Savage',
        'birthdate': '5 February 1980',
        'birthLocation': 'Island, Lagos, Nigeria',
        'origin': 'Island, Lagos, Nigeria',
        'genre': 'Afrobeats, R&B, pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2010-present',
        'labels': '323 Entertainment, Universal Music',
        'children': 1
    },
    'Yemi Alade': {
        'age': 32,
        'birthName': 'Yemi Eberechi Alade',
        'birthdate': '13 March 1989',
        'birthLocation': 'Abia State, Nigeria',
        'origin': 'Abia State, Nigeria',
        'genre': 'Afrobeats, R&B, pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2005-present',
        'labels': 'Effyzzie Music, Universal Music',
        'children': 0
    },
    'Phyno': {
        'age': 35,
        'birthName': 'Chibuzor Nelson Azubuike',
        'birthdate': '9 October 1986',
        'birthLocation': 'Enugu State, Nigeria',
        'origin': 'Enugu State, Nigeria',
        'genre': 'Afrobeats, hip hop',
        'occupation': 'Rapper, singer, songwriter',
        'yearsActive': '2003-present',
        'labels': 'PentHauze Music',
        'children': 0
    },
    'Simi': {
        'age': 33,
        'birthName': 'Simisola Kosoko',
        'birthdate': '19 April 1988',
        'birthLocation': 'Ojuelegba, Lagos, Nigeria',
        'origin': 'Ojuelegba, Lagos, Nigeria',
        'genre': 'Afrobeats, R&B, soul',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2008-present',
        'labels': 'Studio Brat',
        'children': 1
    },
    'Falz': {
        'age': 31,
        'birthName': 'Folarin Falana',
        'birthdate': '27 October 1990',
        'birthLocation': 'Lagos State, Nigeria',
        'origin': 'Lagos State, Nigeria',
        'genre': 'Afrobeats, hip hop',
        'occupation': 'Rapper, singer, actor',
        'yearsActive': '2009-present',
        'labels': 'Bahd Guys Entertainment',
        'children': 0
    },
    
    'P!nk': {
        'age': 43,
        'birthName': 'Alecia Beth Moore',
        'birthdate': '8 September 1979',
        'birthLocation': 'Doylestown, Pennsylvania, USA',
        'origin': 'Philadelphia, Pennsylvania, USA',
        'genre': 'Pop, rock',
        'occupation': 'Singer, songwriter',
        'yearsActive': '1995-present',
        'labels': 'LaFace, RCA',
        'children': 2
    },
    'Sam Smith': {
        'age': 29,
        'birthName': 'Samuel Frederick Smith',
        'birthdate': '19 May 1992',
        'birthLocation': 'London, England',
        'origin': 'London, England',
        'genre': 'Pop, R&B',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2007-present',
        'labels': 'Capitol, EMI, Universal',
        'children': 0
    },
    'Alicia Keys': {
        'age': 41,
        'birthName': 'Alicia Augello Cook',
        'birthdate': '25 January 1981',
        'birthLocation': 'New York City, New York, USA',
        'origin': "Hell's Kitchen, New York City, New York, USA",
        'genre': 'R&B, soul',
        'occupation': 'Singer, songwriter, pianist',
        'yearsActive': '1996-present',
        'labels': 'J Records, RCA',
        'children': 2
    },
    'Pitbull': {
        'age': 41,
        'birthName': 'Armando Christian Pérez',
        'birthdate': '15 January 1981',
        'birthLocation': 'Miami, Florida, USA',
        'origin': 'Miami, Florida, USA',
        'genre': 'Hip hop, dance, pop',
        'occupation': 'Rapper, singer, songwriter',
        'yearsActive': '2001-present',
        'labels': 'Mr. 305, Polo Grounds, RCA',
        'children': 2
    },
    'Taylor Swift': {
        'age': 32,
        'birthName': 'Taylor Alison Swift',
        'birthdate': '13 December 1989',
        'birthLocation': 'Reading, Pennsylvania, USA',
        'origin': 'Nashville, Tennessee, USA',
        'genre': 'Country, pop',
        'occupation': 'Singer-songwriter, actress',
        'yearsActive': '2004-present',
        'labels': 'Big Machine, Republic',
        'children': 0
    },
    'Liam Payne': {
        'age': 28,
        'birthName': 'Liam James Payne',
        'birthdate': '29 August 1993',
        'birthLocation': 'Wolverhampton, England',
        'origin': 'Wolverhampton, England',
        'genre': 'Pop',
        'occupation': 'Singer, songwriter',
        'yearsActive': '2008-present',
        'labels':'Big Machine, Republic',
        'children': 0
    },    
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})