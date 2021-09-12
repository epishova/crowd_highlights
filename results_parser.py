# -*- coding: utf-8 -*-
"""
Created on Fri Nov 17 19:16:31 2017

@author: Anna

This script parses a database dump containing workers' highlights. It prints 
false positives and false negatives statistics. You need to set variables 
(section #set variables#) in order to run it for different tasks and texts.
Also you need to privide the dump file (marks_*.txt) and the list of workers
for whome to count statistics. Note, that not all workers are presented in the
dump because many workers did not highlight anything. 
"""

#Andorra
textA = [[],
[1, "The Principality of Andorra is a tiny independent state located in the Pyrenees, in Southern Europe, between France and Spain. Tradition holds that Charles the Great granted a charter to the Andorran people in return for fighting against the Moors. You can learn more about medieval history of Andorra by visiting the local museum. It is free and open from Monday to Sunday from 8 am to 5 pm."],
[2, "In 1933, France occupied Andorra. During World War II, Andorra remained neutral and was an important smuggling route between Vichy France and Spain. In 1939, Jacques Tremoulet was a French radio and press tycoon who founded Radio Andorra. Between 1940 and 1944, Radio Andorra was the only French-speaking private radio that was able to broadcast freely without any political control. The other private radio stations owned by Tremoulet which were located in France were under control of the Vichy government regime."],
[3, "From 29/11/2016 to 29/01/2017 you can visit Museu del Tabac. The display that can be seen at the Tobacco Museum perfectly reflects the feeling of its author. “This display is a tribute to some of the places that changed my life and which now I want to share with the dreamers of freedom and the pilgrims of solitude”. Opening hours: daily from 8 am to 5 pm. Admission is free."],
[4, "Given Andorra’s strategic location and political features, establishing very close links with its neighboring countries in southwestern Europe, the Pyrenean principality has traditionally attracted foreign visitors who eventually settle down and make of Andorra their new home. The prominent medievalist Philippe Wolff was born in Tolouse, but he lived in retirement in Andorra between 1984 and 2001. Three times winner of the Dakar Rally, Cyril Despres is an Andorran resident since 2000."],
[5, "There are no airports for fixed-wing aircraft within Andorra's borders but there are heliports in La Massana, Arinsal and Escaldes-Engordany with commercial helicopter services. Nearby airports located in Spain and France provide access to international flights for the principality. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old."],
[6, "There are hourly bus services from both Barcelona and Toulouse airports to Andorra. Ticket price is 10 euro per person. The nearest railway station is L'Hospitalet-pres-l'Andorre 10 km east of Andorra. There are also direct Intercites de Nuit trains between L'Hospitalet-pres-l'Andorre and Paris on certain dates. Train ticket is 20 euro per person."],
[7, "Allot one day for exploring Andorra’s quaint capital city, Andorra La Vella. With its charmed cobblestone streets and small stone houses, it is like being transported back in time to the 13th century. Constructed in 1580 as a home for a wealthy family, Casa de la Vall has served as Andorra's parliament building since 1702. It is open for public every weekend from 10:00 am to 2:00 pm. There are free guided tours in several languages, including English. Mentioned in documents from the 9th century, the pre-Romanesque form of the Church of Santa Coloma is Andorra's oldest. It is open for public for free from Monday to Sunday from 9:00am to 2:00pm."],
[8, "The Principality of Andorra has a complete hotel infrastructure, with more than 250 hotels all over the country. All the options are excellent value for money. Every hotel is well-prepared to welcome skiers, providing all the services and amenities that they may need."],
[9, "The Hotel Roc Blanc is the flagship of the Andorran hotel group and was the first to offer the benefits of spa waters in the principality - 995 euro for 14 nights (plus 300 euro for meals). A Casa Canut Gastronomic Hotel is a reference in the country cuisine - 1200 euro for 14 nights (breakfast lunch and dinner included). The Tulip Inn Andorra Delfos Hotel lies at the heart of Escaldes-Engordany - 1020 euro for 14 nights (meals are included)."],
[10, "For skiers wishing to discover the whole ski domain of the Principality, Ski Andorra launches a 5 day ski pass. With this single pass you will enjoy all the ski runs Andorra has to offer. SINGLE PRICE: 200 €. With the season ski pass you will have the opportunity to ski as often as you like on all the ski runs of the Principality. Adults 727 €. Juniors (from 12 to 17 years old) 594 €. Children 518 €."],
[11, "Do not forget that you can win a 10-day ski pass at the Ski Andorra stand during la Fira d’Andorra la Vella. Here are the lucky winners of 2016: David Puy Baron, Jesus Marlet Zanini, Carolina Serra Areny, Gabriela Gacitúa Munoz, Mark Cuthbert."],
[12, "The Grandvalira Encamp sector will be receiving the Freeride Junior World Championships for the third consecutive year in Europe, with the best male and female riders from around the world. Place and dates: Pic Alt de Cubil, Grau Roig, from 3 to 9 February 2017. Attendance is free."],
[13, "The Vallnord Arcalis resort will once more be one of the five exclusive world stages of the prestigious Swatch Freeride World Tour. Place and dates: Arcalis resort Ordino, 5 January 2017. All are welcome. Attendance is free."],
[14, "The Soldeu ski school office can be found at the top of the Soldeu gondola, just over to the right as you step onto the slopes. Full day price for children up to 14 years: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro."],
[15, "Ski Rental. Ski+boots for kids up to 14 years: 7 euro per day. Ski+boots for adults: 15 euro per day."],
[16, "Andorra is famous for the practice of Winter Sports. The Andorran alpine skier Àlex Antor represented his country at the Winter Olympics in 2002 and 2006. Ariadna Tudel Cuberes and Sophie Dusautoir Bertrand earned the bronze medal in the women's team competition at the 2009 European Championship of Ski Mountaineering. Joan Verdu Sanchez earned a bronze medal in Alpine Skiing at the 2012 Winter Youth Olympics. In 2015, Marc Oliveras earned a silver medal in Alpine Skiing at the 2015 Winter Universiade, while Carmina Pallas earned a silver and a bronze medal in the same competition. Other famous athletes are Hocine Haciane, Alex Antor, Eric Bataille, Melissandre Fuentes. Hocine Haciane was the flag bearer at the 2004 Olympic Games in Athens, Greece, and in Beijing in 2008."],
[17, "Christmas wouldn’t be complete without a visit from Saint Nicholas and he makes time during his busy schedule for a stop here. This Christmas Eve (December 24th, 2016) at 7 p.m. he is expected to reach the La Llacuna Cultural Centre to greet the children and hear their requests. The event is free."],
[18, "The Andorra Street Sax Fest is one of the most important European meetings of this specialty. In its 5th edition, you can enjoy an extensive program of concerts, master classes and workshops. The festival will be held from 14 to 28 of December 2016. It is free for all visitors."],
[19, "Caldea, the largest spa in the South of Europe, now completes its offer with Inuu, a centre providing a unique experience consisting of individual care and tailor-made treatment. Caldea opens every day from 10 a.m. to 10 p.m. (on Saturdays until midnight), with the Mondaigua light and music show every day at 9:40 p.m. Prices per day: EUR 15,00."],
[20, "A trip to the National Automobile Museum will have the classier redheads wishing they could take one of the 80 vintage cars or numerous antique motorcycles for a spin through the Pyrenees. The museum is open for free every weekend from 9:00 am to 2:00 pm."],
[21, "Andorra is home to folk dances like the contrapàs and marratxa, which survive in Sant Julià de Lòria especially. Famous American folk artist Malvina Reynolds, intrigued by its defense budget of $4.90, wrote a song called Andorra. A prominent activist and a singer Pete Seeger added verses, and sang Andorra on his 1962 album The Bitter and the Sweet."]
]
#Gastein
textG = [[],
[1, "In the midst of Hohe Tauern National Park and in the heart of Salzburg province lies Bad Gastein. The actual name ‘Gastein’ is first mentioned in a document from the year 1203. In the 19th century the waters of Bad Gastein became a fashionable resort, visited by European monarchs as well as the rich and famous. Numerous illustrious guests, such as Emperor Franz Josef I, Prince Bismarck, Schopenhauer and many others, gave Gastein the reputation of a modern, cosmopolitan spa destination."],
[2, "Nearby airports locate in Vienna and Salzburg. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old."],
[3, "The Gastein valley is accessible by the Tauern Railway. It was not until under Habsburg Archduke Ferdinand III that railway development was revived. Emperor Francis I also lent his considerable weight to its increased profile. Mass tourism was pushed by the opening of the Tauern Railway station in 1905. Frequent EuroCity and InterCity trains going along Tauern Railway connect Bad Gastein with many Austrian cities like Vienna, Linz, Salzburg and Graz along a single circuit. Train ticket is 20 euro per person."],
[4, "After major setbacks caused by the wars of the 20th century, the winter of 1945/46 saw the beginning of construction of a ski lift on the Graukogel. Which rang in a new era for Gastein Valley: this was the advent of winter sports."],
[5, "World Cup on the 4th of January 2017! At the Buchebenwiese, next to the Stubnerkogel bottom station of the cable car, the boarders elite will fight for their first medals in 2017. A great atmosphere and tough runs are guaranteed! Free admission for public."],
[6, "After a one-year break, the international freeski elite will be back in Bad Gastein, Salzburg, Austria. The winter destination is preparing for the 7th edition of Red Bull PlayStreets. 01/15/2017 the world’s best artists on two “planks” will entertain thousands of spectators! Free admission!"],
[7, "Since 2007, the town also annually hosts the Gastein Ladies tennis tournament, an International event on the WTA Tour, attracting top players like Julia Görges. The prominent athletes who were born in Bad Gastein are Thea Hochleitner an alpine skier and Hans Eder a Nordic skier."],
[8, "Whether you are skiing or boarding, in Gastein's four ski areas, with 200 kilometers of slopes and snows you can always count on, you are certain to find the hill of your dreams!"],
[9, "Gastein Ski Pass Prices and Season Dates for 2016/2017:"],
[10, "6-day ski pass: adults 240 €, juniors (from 12 to 17 years old) 180 €, children 120 €."],
[11, "4-day ski pass: adults 180 €, juniors (from 12 to 17 years old) 110 €, children 90 €."],
[12, "From 18.01.2017 there is a free ski-pass for children of your own family up to the age of 15 when one parent purchases a ski-pass (valid for min. 6 day ski-pass)."],
[13, "The best Gastein offers apartments for 2 adults and 1 child from 23th of December to 6th of January:"],
[14, "HAUS AM LIFT - 1100 euro (breakfast lunch and dinner included)"],
[15, "HAUS MARIA - 820 euro, (plus 300 euro for meals)"],
[16, "APPARTEMENT ACHENBLICK (meals are included) - 1300 euro."],
[17, "A stylish ambiance awaits you at the Hotel Salzburger Hof. In 1889 it consisted of at least 3 major buildings built by the famous Italian builder Angelo Comini. In the 80's and 90's famous artists stayed there such as Anita Ekberg, Liza Minelli and many more."],
[18, "World-famous Gastein Waterfall, which is flanked by magnificent houses, is also a part of the characteristic picture of this village in the Gastein Valley. We encourage you to visit the waterfall which is located right in the center and has been used as a motive of many well-known painters."],
[19, "The composer Franz Schubert composed his Piano Sonata in D Major in Bad Gastein, and was once believed to have sketched a Gmunden-Gastein Symphony (D. 849) during his stay in August and September 1825."],
[20, "Standing at the entrance to Gastein Valley is Klammstein Castle. A free guided tour amidst its ancient castle walls sheds fascinating light on this, the oldest structure in the Gastein Valley. It is open for public every Sunday from 10:00 am to 2:00 pm."],
[21, "Skiers and snowboarders can even enjoy art while descending the slopes. The festival, where illuminated photographs and cool sculptures can be admired, takes place from 28th December to 15th January 2017 throughout Gastein. The entrance is free."],
[22, "Whether skiing, snowboarding, race camp, or a snow adventure, Schlossalm ski school is here to provide guests with optimal supervision and individual learning! Full day price for children up to 14 years: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro."],
[23,  "When a four-time World Cup winner like Hans Grugger puts his name behind a new training concept, that carries a lot of weight. Ski Race Academy Gastein provides support to racers, both current and aspiring, through custom-tailored courses. The school offers lessons of ski racing for advanced skiers. One-day lesson is 60 euro for a person."],
[24, "Ski Rental. Ski+boots for kids up to 14 years: 10 euro per day. Ski+boots for adults: 15 euro per day. ATTENTION: the 7th day rental is FREE for all items!"],
[25, "On the 05.01.2017, there is a special kind of experience for visitors in Sportgastein. Not only alpine and cross-country skiers will demonstrate their stamina on the slopes and trails, also our canine 'athletes' will be giving it all they’ve got. So you have the unique opportunity to cheer on national and international dog sledding teams vying for the Alpen Trophy. There is no fee to attend this event."],
[26, "At Gastein‘s Felsentherme spa resort, you will find areas for quiet relaxation and enjoyable activities in and around the water, also able to enjoy the glorious setting of the outdoor facilities. Prices per day: adults EUR 15,00; children EUR 7,50. Kiddie's special' children with min. 1 adult EUR 5,00. Open every day from 9:00 am till midnight."],
[27, "In the 50's and 60's many famous spa guests came to Bad Gastein, such as Tyrone Power, Lady Churchill and many more."],
[28, "The historical town center of Bad Gastein, with its pedestrian areas illuminated by Christmas lights, provides the unique setting for festive Advent markets. Tradition and variety are guaranteed by local folk-music groups, brass ensembles and Nativity plays. And be sure to attend the unique parades of costumed Krampus figures, here in the midst of an idyllic winter world of boundless romance. The Advent market is open from 12/15/2016 to 01/10/1017 every day from 3 to 8 pm."],
[29, "Numerous points of interest, around which there swirl many different stories, provide insights into the historical development of the valley. Every Sunday at 12:30 pm free historical walking tours are offered - for details, please contact the Gastein Museum."]
]
#Kitc
textK = [[],
[1, "Kitzbuhel is a small medieval town situated along the river Kitzbuhler Ache in Tyrol, Austria. You can learn more about history of Kitzbuhel by visiting the Municipal Museum of Kitzbuehel. It is free and open from Monday to Sunday from 9:00 am to 5:00 pm."],
[2, "You can enjoy the guided walking tours for free. Our guide Engelbert will take you to the most marvellous places in the Kitzbühel Alps. When: from Monday to Friday. Meetingplace: 09.45 a.m Kitzbühel Tourismus."],
[3, "At the north of Kitzbuhel there is the Gothic St. Catherine's Church built in the 14th century and now a war memorial. Interior highlights include a box window on the south wall, a carved figure of Our Lady from the 15th century, and a winged altarpiece from 1520. It is open for tourists every Sunday from 10:00 am to 1:00 pm. The entrance is free."],
[4, "There are a number of airlines operating direct flights to Munich. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old. There are hourly bus services from Munich airport to Kitzbuhel (10 euro per person). Discount option for Lufthansa travelers. You will receive free shuttle services. Simply show your Lufthansa boarding pass."],
[5, "Kitzbuhel is one of Austria's best-known and fanciest winter sports resorts. In the 1950s, local legends like Ernst Hinterseer, Hias Leitner, Anderl Molterer, Christian Pravda, Fritz Huber Jr. and Toni Sailer wrote skiing history. Now there is a new generation earning the title of Kitzbuhel legends: Rosi Schipflinger, Axel Naglich, Kaspar Frauenschuh and David Kreiner."],
[6, "EXPERIENCE A WHOLE DAY OF SKIING FUN. One day ticket: Adults - € 50, Youth - € 30, Children - € 20. We offer our holiday guests multi-day tickets for the exact length of their holiday. 10-day ticket: Adults - € 400, Children (up to 10 years old) - € 200."],
[7, "From 24 November to 25 December, the town centre will be transformed into a festive scene. Don t miss the grand opening in the scenic town centre on 24 November at 6.00 p.m. We recommend getting there on time, as this is certainly one of the most traditional and beautiful Christmas Markets for miles around. Every day between 6.00 p.m. and 7.00 p.m., local musicians and choirs will bring the entire market area to life with the sound of music. Head to the Kitzbuhel Museum, where from 3.00 p.m. on Christmas Eve a free Christmas reading session will be held."],
[8, "The big highlight in Kitzbuehels year always takes place on 1st January. The Rasmusleiten brings tens of thousands of spectators to an event in extra class: Torch skiing the ski schools 'Red Devils' and 'Element3', fire jumping, music, and of course the spectacular fireworks of the world famous Pyro professionals Armin Lukasser. Beginning: 5:30 pm. Free admission!"],
[9, "Kitzbuehel welcomes the new year with a class winter sport. For the 15th time the Snow Polo World Cup will be held on the outskirts of Kitzbuehel from 12 to 15 January, 2017. From 17 to 22 January 2017, the entire ski world gets Hahnenkamm fever. The best ski athletes in the world will gather in Kitzbuehel to celebrate the highlight of the World Cup calendar. Free admission for both events!"],
[10,  "In Wildpark Aurach of Kitzbuehel approximately 200 animals live at 1,100 m above sea level in Tyrol's largest outdoor enclosure. On the tour you will encounter deer, lynx, wild boar, yak, zebu, marmots, wild ducks, pheasants, peacocks, ibex etc. Wildlife feeding is daily at 2:30 pm. Entrance is EUR 8.00."],
[11,  "The connection between Kitzbuehel and skiing is legendary. In March 1893, Franz Reisch managed to ski down from the Kitzbueheler Horn, making it the first Alpine ski run in Austria. Reisch had read the sensational book; “On snowshoes through Greenland” by Norwegian polar explorer, Fridtjof Nansen in which the author expresses enthusiasm for Skisport. This book may well have been the trigger that began the unprecedented development of a sleepy mountain town into a place that is the heart and soul of skiing."],
[12,  "In 1926 the Kitzbuehel Ski School was founded and it became world famous under the leadership of Karl Koller. He also developed “Ski Peadagoge” and became great friends with the 'Ski-Pope' Stefan Kruckenhauser who revolutionized ski teaching. He introduced short ski teaching methods without ‘Stemmbewegungen’ (knee turns), published ski videos and textbooks and changed many other things."],
[13,  "Full day price for children: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro."],
[14,  "Ski Rental. Ski+boots for kids up to 14 years: 10 euro per day. Ski+boots for adults: 20 euro per day. ATTENTION: the 7th day rental is FREE for all items! During your lessons at the school, you can rent the ski equipment for free."],
[15,  "The legendary “Ski Wonder Team” plays a legendary role in the history of Kitzbuehel. For ten years, the best skiers in the world all come from Kitzbuehel. Together this miracle team won 27 medals in the Winter Olympic Games and World Skiing Championships. Toni Sailer achieved so much and remarkably was only 22 years old when he ended his professional skiing career. Once, on a visit to Tokyo, he was welcomed by Crown Prince Akihito and 250,000 delirious fans at the airport."],
[16,  "In the last few years, Axel Naglich and Peter Ressman from Kitzbuehel have climbed up the highest mountains and become the first people to ski some of most extreme downhill routes in the world. Axel Naglich loves a challenge. He has three wins at the 24- hour-race in Aspen, 11 years experience as a forerunner on the Streif at the Hahnenkamm downhill race and became the first man to ski the longest downhill in the world at Mount St.Elias in Alaska, 5489 metres above sea level."],
[17,  "You can find out more about history of winter sports at Kitzbühel Town Museum. In 2007 the Kitzbühel Town Museum was awarded with the Austrian Museum Quality Seal. Opening hours: all-the-year from Tuesday to Sunday from 2 to 6 pm. It is free for all visitors."],
[18,  "At the northern end of Old Town Kitzbühel stands picturesque St. Andreas Parish Church. Built between 1435 and 1506 and later remodeled in Baroque style, this massive building with its low tower and dome is equally attractive inside, boasting beautiful stucco work, ceiling paintings, and 15th-century frescos. It is open for public every Sunday from 10:00 am to 1:00 pm. There are free guided tours in several languages, including English."],
[19,  "There is a renewed interest in the traditional winter sport of ice skating. The new Ice Rink in Kitzbuehel is open 24/7 and has an area of 1,800 square metres of ice designed to please the present and future stars of the ice. Skates are available to rent in house. Entry prices: EUR 5. Skate hire per person EUR 5."],
[20,  "The best KitzSki offers apartments for 2 adults and 1 child from 23th of December to 6th of January:"],
[21,  "HAUS AM LIFT – 1200 euro (breakfast lunch and dinner included)"],
[22,  "HAUS MARIA - 1000 euro, (plus 300 euro for meals)"],
[23,  "APPARTEMENT ACHENBLICK (meals are included) - 1500 euro"],
[24,  "Treat yourself to sometime in the pool with the wellness and health centre in the heart of Kitzbuehel! Relax and unwind in the sauna and be pampered from head to toe in the Aquarena spa. It is open daily from 11:00 am till 11:00 pm. Prices per day: EUR 15."],
]
#Budget (Bellow, I commented free events), Andorra:
clues_BA = [
#[1,	318,	342],
#[3,	370,	380],
#[3,	44,	59],
[5,	337,	400],
[5,	240,	261],
[6,	84,	118],
#[7,	532,	606],
#[7,	397,	414],
#[7,	253,	268],
#[7,	0,	75],
[9,	261,	322],
[9,	190,	220],
[10,	188,	207],
[10,	96,	110],
#[13,	205,	223],
#[13,	104,	130],
[14,	128,	247],
[14,	0,	21],
[15,	0,	100],
#[17,	280,	297],
#[17,	205,	232],
#[18,	218,	249],
#[18,	19,	27],
#[20,	189,	255],
#[20,	14,	40]
]
clue_inst_BA = [
[[5,	337,	400], [5,	240,	261]],
[[6,	84,	118]],
[[9,	261,	322], [9,	190,	220]],
[[10,	188,	207], [10,	96,	110]],
[[14,	128,	247], [14,	0,	21]],
[[15,	0,	100]]
]
traps_BA = [
[6	,314	,348],
[9	,401	,445],
[9	,323	,358],
[9	,140	,188],
[9	,0	,19 ],
[10	,333	,402],
[11	,27	,48 ],
[14	,249	,329],
[19	,179	,318],
[19	,0	,6  ]
]
trap_inst_BA = [
[[6	,314	,348]],
[[9	,401	,445], [9	,323	,358]],
[[9	,140	,188], [9	,0	,19 ]],
[[10	,333	,402]],
[[11	,27	,48 ]],
[[14	,249	,329]],
[[19	,179	,318], [19	,0	,6  ]]
]
#Budget, Gast:
clues_BG = [
[2	,70,	163],
[3	,478,	514],
#[5	,230,	256],
#[5	,0,	9],
[10	,0,	100],
[11	,0,	100],
[14	,0,	100],
#[18	,176,	195],
#[18	,0,	30],
#[20	,0,	83],
#[21	,224,	244],
#[21	,72,	84],
[22	,62,	281],
[24	,0,	300]
#[25	,0,	85],
#[26	,369,	406], there is no clue
#[28	,142,	156],
#[29	,167,	208]
]
clue_inst_BG = [
[[2	,70,	163]],
[[3	,478,	514]],
[[10	,0,	100]],
[[11	,0,	100]],
[[14	,0,	100]],
[[22	,62,	281]],
[[24	,0,	300]]
]
traps_BG = [
[6	,163	,195],
[12	,0	,300],
[15	,0	,100],
[16	,0	,100],
[22	,281	,362],
[23	,127	,340],
[26	,196	,302],
[26	,0	,36 ]
]
trap_inst_BG = [
[[6	,163	,195]],
[[12	,0	,300]],
[[15	,0	,100]],
[[16	,0	,100]],
[[22	,281	,362]],
[[23	,127	,340]],
[[26	,196	,302], [26	,0	,36 ]]
]
#Budget, Kitc:
clues_BK = [
#[1,	153,	204],
#[2,	14	,49 ],
#[3,	328,	348],
#[3,	39	,68],
[4,	270,	349],
[4,	86	,183],
[6,	184,	253],
#[7,	458,	474],
#[7,	516,	546],
#[8 ,	351,	365],
#[8 ,	59	,89],
[12,	12	,33],
[13,	0	,104],
[14,	0	,400],
#[17,	231,	258],
#[17,	56	,77 ],
#[18,	372,	399],
#[18,	61	,86 ],
#[19,	265,	313],
#[19,	84	,92 ],
[21,	0	,200]
]
clue_inst_BK = [
[[4,	270,	349]],
[[4,	86	,183]],
[[6,	184,	253]],
[[12,	12	,33], [13,	0	,104]],
[[14,	0	,400]],
[[21,	0	,200]]
]
traps_BK = [
[4	,248	,267],
[4	,202	,214],
[6	,38	,98 ],
[10	,246	,304],
[13	,106	,187],
[22	,0	,200],
[23	,0	,200],
[24	,233	,255],
[24	,173	,185],
[24	,48	,74 ]
]
trap_inst_BK = [
[[4	,248	,267], [4	,202	,214]],
[[6	,38	,98 ]],
[[10	,246	,304]],
[[13	,106	,187]],
[[22	,0	,200]],
[[23	,0	,200]],
[[24	,233	,255], [24	,173	,185], [24	,48	,74 ]]
]
#Events, Andorra:
clues_EA = [
[1	,318	,392	],
[3	,321	,360	],
[3	,5	,59	],
[7	,534	,653	],
[7	,255	,387	],
[7	,0	,75	],
[13	,104	,187	],
[17	,134	,300	],
[18	,218	,249	],
[18	,19	,27	],
[19	,179	,318	],
[19	,0	,6	],
[20	,189	,255	],
[20	,14	,40	]
]
clue_inst_EA = [
[[1	,318	,392	]],
[[3	,321	,360	], [3	,5	,59	]],
[[7	,534	,653	]], 
[[7	,255	,387	]],
[[7	,0	,75	]], 
[[13	,104	,187	]],
[[17	,134	,300	]], 
[[18	,218	,249	], [18	,19	,27	]],
[[19	,179	,318	], [19	,0	,6	]],
[[20	,189	,255	], [20	,14	,40	]]
]
traps_EA = [[12	,52	,262]]
trap_inst_EA = [[el] for el in traps_EA]
#Events, Gast:
clues_EG = [
[5	,0	,37	],
[18	,176	,195	],
[18	,0	,30	],
[20	,193	,252	],
[20	,46	,63	],
[21	,164	,222	],
[21	,72	,84	],
[25	,0	,85	],
[26	,306	,347	],
[26	,3	,39	],
[28	,396	,476	],
[28	,142	,156	],
[29	,142	,208	]
]
clue_inst_EG = [
[[5	,0	,37	]],
[[18	,176	,195	], [18	,0	,30	]],
[[20	,193	,252	], [20	,46	,63	]],
[[21	,164	,222	], [21	,72	,84	]],
[[25	,0	,85	]],
[[26	,306	,347	], [26	,3	,39	]],
[[28	,396	,476	], [28	,142	,156	]],
[[29	,142	,208	]]
]
traps_EG = [[6	,163	,195]]
trap_inst_EG = [[el] for el in traps_EG]
#Events, Kitc:
clues_EK = [
[1	,167	,254	],
[2	,142	,208	],
[2	,18	,38	],
[3	,289	,326	],
[3	,39	,68	],
[7	,458	,560	],
[7	,0	,89	],
[8	,331	,349	],
[8	,59	,89	],
[10	,246	,283	],
[10	,0	,18	],
[17	,199	,231	],
[17	,56	,77	],
[18	,333	,370	],
[18	,61	,86	],
[19	,84	,119	],
[24	,173	,231	]]
clue_inst_EK = [
[[1	,167	,254	]],
[[2	,142	,208	], [2	,18	,38	]],
[[3	,289	,326	], [3	,39	,68	]],
[[7	,458	,560	]],
[[7	,0	,89	]],
[[8	,331	,349	], [8	,59	,89	]],
[[10	,246	,283	], [10	,0	,18	]],
[[17	,199	,231	], [17	,56	,77	]],
[[18	,333	,370	], [18	,61	,86	]],
[[19	,84	,119	]],
[[24	,173	,231	]]]
traps_EK = [
[7	,106	,172],
[9	,82	,245]]
trap_inst_EK = [[el] for el in traps_EK]
#Famous, Andorra:
clues_FA = [
[1	,148,	165],
[2	,158,	175], #moved to double_names
[4	,306,	320],
[4	,442,	456],
[16	,79,  90 ], #moved to double_names
[16	,657,	677],
[16	,642,	656],
[16	,615,	629], #moved to double_names
[16	,513,	528],
[16	,422,	436],
[16	,320,	339],
[16	,181,	207],
[16	,155,	177]]
traps_FA = [
[2	,426, 435], #moved to double_names
[11	,145, 245],
[16	,679, 694], #moved to double_names
[16	,631, 641], #moved to double_names
[21	,267, 278],
[21	,144, 160]]
clue_inst_FA = [[el] for el in clues_FA]
trap_inst_FA = [[el] for el in traps_FA]
#double_names = {
#Trem: [2, [158, 175], [426, 435]],
#Ant: [16, [79	,90], [630, 641]],
#Hac: [16, [614,	629], [678, 694]]
#}
#Famous, Gast:
clues_FG = [
[1	,393,	406],
[1	,375,	392],
[1	,353,	375],
[3	,149,	166],
[3	,79	,110],
[7	,254,	264],
[7	,217,	234],
[7	,147,	160],
[17	,232,	244],
[17	,218,	230],
[17	,146,	159],
[19	,13	,27	],
[23	,39	,51	],
[27	,87	,101],
[27	,73	,85	]]
traps_FG = []
clue_inst_FG = [[el] for el in clues_FG]
trap_inst_FG = [[el] for el in traps_FG]
#Famous, Kitc:
clues_FK = [
[5	,357,	370],
[5	,334,	352],
[5	,320,	332],
[5	,301,	318],
[5	,197,	208],
[5	,177,	191],
[5	,159,	175],
[5	,142,	157],
[5	,128,	140],
[5	,110,	126],
[8	,315,	329],
[11	,286,	301],
[11	,74	,86	],
[12	,193,	213],
[12	,97,	108],
[16	,40,	53	]]
traps_FK = [
[15, 418, 438],
[15, 260, 271],
[16, 23, 35]]
clue_inst_FK = [[el] for el in clues_FK]
trap_inst_FK = [[el] for el in traps_FK]
################ Set variables: ###############################
import pandas as pd

text = textK            #change the last upper-letters (F/B/E and A/K/G) and RESORT to run the script for different tasks and texts 
clueList = clues_BK
trapList = traps_BK
clue_inst = clue_inst_BK
trap_inst = trap_inst_BK
#RESORT = "Andorra"
#RESORT = "Gastein"
RESORT = "Kitzbuel"

#database dump:
data = pd.read_table('marks_B_3_cont.txt', sep = ',', header = None)
#list of workers for whome gather statistics:
groupIdsAll = [
["FRbKhBzCCiLtZFQJq", "Andorra "],
["HgRM6BnMWcCkbw47n", "Gastein "],
["RBu9KBKw8ZwDoc8ox", "Andorra "],
["j6qokcwoLtgBbeT9R", "Kitzbuel"],
["pw7NmzsTcSfinHzJh", "Kitzbuel"],
["GQymDqnLzhc2DR8ps", "Gastein "],
["LftpDjt4QChw6vAaw", "Andorra "],
["dwLzG5i4KJmorueu9", "Kitzbuel"],
["j6Ku7jCWs8z4tHBaY", "Kitzbuel"],
["KC9NNEhrTPxCdBqFA", "Gastein "],
["oFYrYEG9QyjnsxKes", "Kitzbuel"],
["TnRB8ojsqdYRXs7F4", "Kitzbuel"],
["Pxht5rgDjB3bombo8", "Kitzbuel"],
["bwXvLKDq8thSjSyBq", "Kitzbuel"],
["eGoJZtyqR3pLJkNwD", "Kitzbuel"],
["sBsMWSZmLMXGtyota", "Andorra "],
["ty8hu9dYoTALnz8qX", "Gastein "],
["Ezuwmo22ieEDzCrbr", "Andorra "],
["WCFCuZuyYT7jSWrbi", "Gastein "],
["DMLwhoYETjTfcMieY", "Gastein "],
["HsLZRrW64nXAQKXLB", "Kitzbuel"],
["gx8qcNwBerS9CxmyZ", "Kitzbuel"],
["GQKRPFQrC8Ns7fADn", "Kitzbuel"],
["jNqqWmmRGgyeB8rdr", "Andorra "],
["s8TBtQTrRCSh9goyo", "Gastein "],
["ko3pcmnHTXKqzwzsA", "Gastein "],
["aA3YCCnT7CK9MSafH", "Kitzbuel"],
["gbQsgazzbr62LwQEr", "Kitzbuel"],
["LnEWgCDP8nEJeaz4v", "Kitzbuel"],
["BdhWZrRDkvCbMcTmw", "Andorra "],
["RAuEenEjcoisnMnbW", "Kitzbuel"],
["TnrvpEqJykkeqjBrb", "Gastein "],
["xbBTdNQYyQMgRGKE9", "Kitzbuel"],
["6R4p4dzAQamW6jv96", "Kitzbuel"],
["iDCT5bAytf9RGuu5b", "Gastein "],
["gwsAA6GYwZYz78jcQ", "Gastein "],
["AwQadnw28bESkoF9o", "Andorra "],
["tnnEoPEQc7HAYYZj8", "Gastein "],
["n4T8byHQrJDx6JHvL", "Gastein "],
["h7hwz7RLKHFhSpWiP", "Gastein "],
["GQPyZNXLbKsZAdFB3", "Andorra "],
["wrb7CsRpxq3vvjRWC", "Kitzbuel"],
["6obRLe8JNWgB8tmL3", "Gastein "],
["zYNsazpyCfD5fd3Lb", "Gastein "],
["M7aoJEwgSCiE2RiEF", "Kitzbuel"],
["YDFDoiSR7PDsbfhdG", "Andorra "],
["XnEdHxoRddaLYwK7Y", "Kitzbuel"],
["hE9XPPE8d4bwRc6av", "Andorra "],
["rXYgYifv5N4MvqBxg", "Gastein "],
["YtXLzxFrbeSK287ts", "Gastein "],
["foTy5r7oGQSxdJekq", "Andorra "],
["8QezZZXXZi7yqegQk", "Gastein "],
["EB6RihdnX5H6M8FNJ", "Kitzbuel"],
["y5AkarCLtBtMfCE4N", "Andorra "]]
groupIds = []

for row in groupIdsAll:
    if row[1].strip(' ') == RESORT:
        groupIds.append(row[0])
#print groupIds        

for clue in clueList:
    if clue[2] >= len(text[clue[0]][1]):
        clue[2] = len(text[clue[0]][1])
for clue in trapList:
    if clue[2] >= len(text[clue[0]][1]):
        clue[2] = len(text[clue[0]][1])

clue_words = {}
for clue in clueList:
    hlt = text[clue[0]][1][clue[1]:clue[2]]
    print 'hlt = ', clue[0], hlt
    hltSplit = hlt.split()
    shift = 0
    intervals = []    
    for word in hltSplit:
        intervals.append([hlt.find(word, shift), hlt.find(word, shift)+len(word)])
        shift = hlt.find(word, shift)+len(word)
    for interval in intervals:
        interval[0] = interval[0] + clue[1]
        interval[1] = interval[1] + clue[1]
    if clue_words.has_key(clue[0]):
        clue_words[clue[0]] += intervals
    else:
        clue_words[clue[0]] = intervals      

#count = 0
#for key in clue_words:
#    count += len(clue_words[key])
#print "clue_words = ", count
        
trap_words = {}
for clue in trapList:
    hlt = text[clue[0]][1][clue[1]:clue[2]].strip(',.:- ')
    print 'hlt = ', clue[0], hlt
    hltSplit = hlt.split()
    shift = 0
    intervals = []    
    for word in hltSplit:
        intervals.append([hlt.find(word, shift), hlt.find(word, shift)+len(word)])
        shift = hlt.find(word, shift)+len(word)
    for interval in intervals:
        interval[0] = interval[0] + clue[1]
        interval[1] = interval[1] + clue[1]
    if trap_words.has_key(clue[0]):
        trap_words[clue[0]] += intervals
    else:
        trap_words[clue[0]] = intervals      

#count = 0
#for key in trap_words:
#    count += len(trap_words[key])
#print "trap_words = ", count
        
        
all_words = [[]]
for pid in text:
    if pid == []:
        continue
    hltSplit = pid[1].split()
    shift = 0
    intervals = []    
    for word in hltSplit:
        intervals.append([pid[1].find(word, shift), pid[1].find(word, shift)+len(word)])
        shift = pid[1].find(word, shift)+len(word)
    all_words.append([pid[0], intervals])  
    
#not_clues = {}
#for pid in all_words:
#    if pid == []:
#        continue
#    clues4pid = []
#    for word in pid[1]:
#        intercect = False
#        if clue_words.has_key(pid[0]) == True:
#            for clue in clue_words[pid[0]]:
#                if word[1] >= clue[0] and word[0] <= clue[1]: #intercect?
#                    intercect = True
#                    break
#        if intercect == False:
#            clues4pid.append(word)
#    not_clues[pid[0]] = clues4pid

empty_words = {}
for pid in all_words:
    if pid == []:
        continue
    clues4pid = []
    for word in pid[1]:
        intercect = False
        if clue_words.has_key(pid[0]) == True:
            for clue in clue_words[pid[0]]:
                if word[1] >= clue[0] and word[0] <= clue[1]: #intercect?
                    intercect = True
                    break
        if trap_words.has_key(pid[0]) == True:
            for clue in trap_words[pid[0]]:
                if word[1] >= clue[0] and word[0] <= clue[1]: #intercect?
                    intercect = True
                    break
        if intercect == False:
            clues4pid.append(word)
    empty_words[pid[0]] = clues4pid
    
#print empty_words
        
hlt_words = {}
not_hlt_words = {}
FPt = {}
FPe = {}
FNc = {}
FPRt = {}
FPRe = {}
FNRc = {}
worker_clue_inst = {}
worker_trap_inst = {}
worker_empty_inst = {}

for groupId in groupIds:
    #if groupId[0] == RESORT:
    hlt_words[groupId] = {}
    not_hlt_words[groupId] = {}
    FPt[groupId] = 0
    FPe[groupId] = 0
    FNc[groupId] = 0
    FPRt[groupId] = 0
    FPRe[groupId] = 0
    FNRc[groupId] = 0
    worker_clue_inst[groupId] = [0 for el in range(len(clue_inst))]             
    worker_trap_inst[groupId] = [0 for el in range(len(trap_inst))]             
    worker_empty_inst[groupId] = 0

########################## Parse data###################################

#count if a clue, a trap, or an empty word was highlighted
for index, row in data.iterrows():
    if row[5].strip(' "') in groupIds and row[3].strip(' "') == RESORT:
        pid = [row[7], row[9], row[11]]
        isClue = False
        for clue_num in range(len(clue_inst)):
            for clue_interval in clue_inst[clue_num]:
                if clue_interval[0] == pid[0] and pid[1] <= clue_interval[2] and pid[2] >= clue_interval[1]: #intercect?
                    worker_clue_inst[row[5].strip(' "')][clue_num] = 1
                    isClue = True
                    break
        if not isClue:
            for clue_num in range(len(trap_inst)):
                for clue_interval in trap_inst[clue_num]:
                    if clue_interval[0] == pid[0] and pid[1] <= clue_interval[2] and pid[2] >= clue_interval[1]: #intercect?
                        worker_trap_inst[row[5].strip(' "')][clue_num] = 1
                        isClue = True
                        break
        if not isClue:
            worker_empty_inst[row[5].strip(' "')] += 1

#count as a clue if the second appiarence of the name was highlighted and
#the first appiarance of that name was not highlighted:
if clueList == clues_FA:
    for groupId in groupIds:    
        if worker_clue_inst[groupId][1] == 0 and worker_trap_inst[groupId][0] == 1:
            worker_clue_inst[groupId][1] = 1
            worker_trap_inst[groupId][0] = 0
        if worker_clue_inst[groupId][7] == 0 and worker_trap_inst[groupId][2] == 1:
            worker_clue_inst[groupId][7] = 1
            worker_trap_inst[groupId][2] = 0
        if worker_clue_inst[groupId][4] == 0 and worker_trap_inst[groupId][3] == 1:
            worker_clue_inst[groupId][4] = 1
            worker_trap_inst[groupId][3] = 0
if clueList == clues_FK:
    for groupId in groupIds:    
        if worker_clue_inst[groupId][4] == 0 and worker_trap_inst[groupId][1] == 1:
            worker_clue_inst[groupId][4] = 1
            worker_trap_inst[groupId][1] = 0
        if worker_clue_inst[groupId][2] == 0 and worker_trap_inst[groupId][2] == 1:
            worker_clue_inst[groupId][2] = 1
            worker_trap_inst[groupId][2] = 0
        
print worker_clue_inst
print worker_trap_inst
print worker_empty_inst

#for each worker collect all words that he highlighted:
for index, row in data.iterrows():
    if row[5].strip(' "') in groupIds and row[3].strip(' "') == RESORT:
        pid = [row[7], row[9], row[11]]
        hlt = text[pid[0]][1][pid[1]:pid[2]].strip(',.:- ')
        hltSplit = hlt.split()
        shift = 0
        intervals = []    
        for word in hltSplit:
            intervals.append([hlt.find(word, shift), hlt.find(word, shift)+len(word)])
            shift = hlt.find(word, shift)+len(word)
        for interval in intervals:
            interval[0] = interval[0] + pid[1]
            interval[1] = interval[1] + pid[1]
        if hlt_words[row[5].strip(' "')].has_key(pid[0]):
            hlt_words[row[5].strip(' "')][pid[0]] += intervals
        else:
            hlt_words[row[5].strip(' "')][pid[0]] = intervals

#for each workers, collect all words that he did not highlighte:
for groupId in hlt_words:
    if len(hlt_words[groupId]) > 0:
        for pid in hlt_words[groupId]:
            words4pid = []
            for word in all_words[pid][1]:
                for hlt in hlt_words[groupId][pid]:
                    intercect = False
                    if word[1] >= hlt[0] and word[0] <= hlt[1]: #intercect?
                        intercect = True           
                        break
                if intercect == False:
                    words4pid.append(word)                     
            not_hlt_words[groupId][pid] = words4pid

for groupId in FNc:
    if len(hlt_words[groupId]) > 0:
        FPt_count = 0
        FPe_count = 0
        FNc_count = 0
        T = False
        A = False
        Hac = False
        for pid in hlt_words[groupId]:
            prev_range_t = []
            prev_range_e = []
            for hlt in hlt_words[groupId][pid]:
                if trap_words.has_key(pid):
                    for not_clue in trap_words[pid]:
                        if not_clue[1] >= hlt[0] and not_clue[0] <= hlt[1]: #intercect?
                            if prev_range_t != not_clue:
                                FPt_count += 1           
                            prev_range_t = not_clue
                if empty_words.has_key(pid):
                    for not_clue in empty_words[pid]:
                        if not_clue[1] >= hlt[0] and not_clue[0] <= hlt[1]: #intercect?
                            if prev_range_e != not_clue:
                                FPe_count += 1     
                            prev_range_e = not_clue                                  
        FPt[groupId] += FPt_count
        FPe[groupId] += FPe_count
        for pid in not_hlt_words[groupId]:
            prev_range_c = []
            for hlt in not_hlt_words[groupId][pid]:
                if clue_words.has_key(pid):
                    for clue in clue_words[pid]:
                        if clue[1] >= hlt[0] and clue[0] <= hlt[1]: #intercect?
                            if prev_range_c != clue:
                                FNc_count += 1      
                            prev_range_c = clue
        FNc[groupId] += FNc_count

C = 0.0
for pid in clue_words:
    C += len(clue_words[pid])
T = 0.0
for pid in trap_words:
    T += len(trap_words[pid])
E = 0.0
for pid in empty_words:
    E += len(empty_words[pid])
for groupId in FNc:
    print groupId
    
for groupId in FNc:
    if RESORT == "Gastein" and len(trapList) == 0:
        FPt[groupId] = 0
    else:
        FPRt[groupId] = FPt[groupId] / T
    FPRe[groupId] = FPe[groupId] / E
    if len(hlt_words[groupId]) > 0:
        FNRc[groupId] = FNc[groupId] / C
    else:
        FNRc[groupId] = 1
    count = 0    
    for pid in hlt_words[groupId]:
        count += len(hlt_words[groupId][pid])
    print count
    
print '#########################'        
for groupId in FNc:
    print FNc[groupId]
print '#########################'    
for groupId in FNc:
    print FPt[groupId]    
print '#########################'        
for groupId in FNc:
    print FPe[groupId]        
print '#########################'        
for groupId in FNc:
    print FNRc[groupId]
print '#########################'    
for groupId in FNc:
    print FPRt[groupId]    
print '#########################'        
for groupId in FNc:
    print FPRe[groupId]        
    
    