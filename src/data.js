
const data = [
    {
        id: 1,

        name: "Varanasi",

        info: "Varavasi  is a city on the Ganges river in northern India that has a central place in the traditions of pilgrimage, death, and mourning in the Hindu worldVaranasi lies on the left bank of the river. It is 692 kilometres (430 mi) to the southeast of India's capital.Varanasi is one of the world's oldest continually inhabited cities.[21] Kashi, its ancient name, was associated with a kingdom of the same name of 2,500 years ago. The Lion capital of Ashoka at nearby Sarnath has been interpreted to be a commemoration of the Buddha's first sermon there in the fifth century BCE.[22][23] In the 8th century, Adi Shankara established the worship of Shiva as an official sect of Varanasi.",

        image: "https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?b=1&s=612x612&w=0&k=20&c=LaU3hMPtVV7PL1NkGfEx1aTdeD7dRQdyhRxARMUdXsw=",

        price: "INR 69,551",
    },
    {
        id: 2,
        name: "Jodhpur",
        info: "Jodhpur is the second-largest city in the Indian state of Rajasthan and officially the second metropolitan city of the state. It was formerly the seat of the princely state of Jodhpur State. Jodhpur was historically the capital of the Kingdom of Marwar, which is now part of Rajasthan. Jodhpur is a popular tourist destination, featuring many palaces, forts, and temples, set in the stark landscape of the Thar Desert. It is popularly known as the 'Blue City' among people of Rajasthan and all over India.",

        image: "https://t3.ftcdn.net/jpg/01/90/32/12/360_F_190321266_cn9eGhr0o60yNbVtGMfB3ICgWPAuZaB2.jpg",

        price: "INR 82,560",

    },

    {
        id: 3,
        name: "Jaipur",
        info: "Jaipur is formerly Jeypore, is the capital and largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant colour scheme of its buildings. It is also known as the Paris of India, and C. V. Raman called it the Island of Glory. ",
        image: "https://w0.peakpx.com/wallpaper/159/511/HD-wallpaper-amber-fort-jaipur-bing-amer-fort.jpg",
        price: "INR 29,695",
    },
    {
        id: 4,
        name: "Goa",
        info: "Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth smallest by population. Goa has the highest GDP per capita among all Indian states, Goa the best-placed state because of its infrastructure, and India's National Commission on Population rated it as having the best quality of life in India(based on the commission's 12 Indicators).",
        image: "Goa.png",
        price: "INR 35,345",
    },
    {
        id: 5,
        name: "Agra",
        info: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third most populous city in India.. Agra's notable historical period began during Sikandar Lodi's reign, but the golden age of the city began with the Mughals. Agra was the foremost city of the Indian subcontinent and the capital of the Mughal Empire under Mughal emperors Babur, Humayun, Akbar, Jahangir and Shah Jahan. Under Mughal rule, Agra became a centre for learning, arts, commerce, and religion, and saw the construction of the Agra Fort, Sikandra and Agra's most prized monument, the Taj Mahal, built by Shah Jahan as a mausoleum for his favourite empress",
        image: "https://images.unsplash.com/photo-1602579647012-44ba68534a12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        price: "INR 35,786",
    },
    {
        id: 6,
        name: "Kochi",
        info: "Kochi also known by its former name Cochin,is a major port city on the Malabar Coast of India bordering the Laccadive Sea. It is part of the district of Ernakulam in the state of Kerala and is commonly referred to as Ernakulam. Kochi is the most densely populated city in Kerala. As of 2011, it has a corporation limit population of 677,381[4] within an area of 94.88 km2 and a total urban population of more than of 2.1 million within an area of 440 km2, making it the largest and the most populous metropolitan area in Kerala",
        image: "kochi.png",
        price: "INR 68,595",
    },
    {
        id: 7,
        name: "Jaisalmer",
        info: "Jaisalmer nicknamed The Golden city, is a city in the Indian state of Rajasthan, located 575 kilometres (357 mi) west of the state capital Jaipur. It is the administrative headquarters of Jaisalmer District. Before Indian independence, the town served as the capital of the Jaisalmer State, ruled by the Bhati Rajputs. Jaisalmer stands on a ridge of yellowish sandstone and is crowned by the ancient Jaisalmer Fort. This fort contains a royal palace and several ornate Jain temples. Many of the houses and temples of both the fort and of the town below are built of finely sculptured sandstone. The town lies in the heart of the Thar Desert (the Great Indian Desert) and has a population, including the residents of the fort, of about 78,000.",
        image: "https://t4.ftcdn.net/jpg/02/88/10/51/360_F_288105149_rleDz7UQkzXzNwYBzMdd1GrGjCvcni3U.jpg",
        price: "INR 68,595",
    },
    {
        id:8,
        name: "Delhi",
        info: "It is officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, primarily its western or right bank, Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions. The earliest, Indraprastha, is part of a literary description in the Sanskrit epic Mahabharata (composed c. 400 BCE to 200 CE but describing an earlier time) which situates a city on a knoll on the banks of the river Yamuna. According to art historian Catherine B. Asher, the topographical description of the Mahabharata matches the area of Purana Qila, a 14th-century CE fort of the Delhi sultanate, but the analogy does not go much further. Whereas the Mahabharata speaks of a beautifully decorated city with surrounding fortification, the excavations have yielded uneven findings of painted grey pottery characteristic of the eleventh century BCE; no signs of a built environment, much fewer fortifications, have been revealed.",
        
        image: "https://www.delhimetrotimes.in/photos/2018/10/14/akshardham-temple.jpg",
        price: "INR 60,555",
    },
    {
        id: 9, 
        name: "Mumbai",
        info: "also known as Bombay /bɒmˈbeɪ/— the official name until 1995) is the capital city of the Indian state of Maharashtra. Mumbai is the de facto financial centre and the most populous city of India with an estimated city proper population of 12.5 million (1.25 crore).[18] Mumbai is the centre of the Mumbai Metropolitan Region, the sixth most populous metropolitan area in the world with a population of over 23 million (2.3 crore) living under the Brihanmumbai Municipal Corporation.[19] Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city.Mumbai is the financial, commercial,[29] and the entertainment capital of India. It is also one of the world's top ten centres of commerce in terms of global financial flow,[30] generating 6.16% of India's GDP,[31] and accounting for 25% of industrial output, 70% of maritime trade in India (Mumbai Port Trust, Dharamtar Port and JNPT),[32] and 70% of capital transactions to India's economy.[33][34] The city houses important financial institutions and the corporate headquarters of numerous Indian companies and multinational corporations. It is also home to some of India's premier scientific and nuclear institutes. The city is also home to Bollywood and Marathi cinema industries.",

        image: "https://www.revv.co.in/blogs/wp-content/uploads/2017/11/4vqymeb.jpg",

        price:"INR 80,101",
    }
];

export default data;
