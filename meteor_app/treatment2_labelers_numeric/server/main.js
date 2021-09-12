import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

Meteor.startup(
  function() {
      //console.log('expTypes.count(): ', experimentTypes.find().count());
      if (experimentTypes.find().count() == 0) {
          experimentTypes.insert({experimentTypeId: 1, experimentType: "1", description: 'One worker. Plain text without highlighting features. Yes/No answer.'});
          experimentTypes.insert({experimentTypeId: 2, experimentType: "2", description: 'One worker. Plain text with highlighting features. Yes/No answer.'});
          experimentTypes.insert({experimentTypeId: 3, experimentType: "3A", description: 'Two workers. First worker only highlights the text.'});
          experimentTypes.insert({experimentTypeId: 4, experimentType: "3B", description: 'Two workers. Second worker sees the marked text. Yes/No answer.', goAfter: "3A"});
      };
      //exp3AB.remove({idRandom: {$lte: 20}});
      //exp3Bhistory.remove({_id: "5ZwaCnLZovTqrBLWy"});
      //exp3Bhistory.remove({_id: "wmjasPyHfg33acRJT"});
      //console.log('--------------------------exp3AB.count = ', exp3AB.find().count());
      if (exp3AB.find().count() < 688) {
			exp3AB.insert({idRandom: 624, idB: "", idA: "oL8nrmx6KZn69qbmZ"});
			exp3AB.insert({idRandom: 625, idB: "", idA: "om9xnpgY4AaY7GbBB"});
			exp3AB.insert({idRandom: 626, idB: "", idA: "rtNfBYdJ6LnCFA9fC"});
			exp3AB.insert({idRandom: 627, idB: "", idA: "hzPE4FBLF7Ro7qG8W"});
			exp3AB.insert({idRandom: 628, idB: "", idA: "PuZMXGD2nxyMHHLR7"});
			exp3AB.insert({idRandom: 629, idB: "", idA: "uBQtpxNYTFq7XFQx3"});
			exp3AB.insert({idRandom: 630, idB: "", idA: "6w8ns7FiYktzzf5Rj"});
			exp3AB.insert({idRandom: 631, idB: "", idA: "AsuvNPvEeK3CpKPwT"});
			exp3AB.insert({idRandom: 632, idB: "", idA: "RRzbxvKxoanwjR9ko"});
			exp3AB.insert({idRandom: 633, idB: "", idA: "zZ7tEDzWXD8kjFQjC"});
			exp3AB.insert({idRandom: 634, idB: "", idA: "iFREJSMvefHRPqBcP"});
			exp3AB.insert({idRandom: 635, idB: "", idA: "uH7yxJTkYPXvceMD9"});
			exp3AB.insert({idRandom: 636, idB: "", idA: "bWphFZYwZANEipnfm"});
			exp3AB.insert({idRandom: 637, idB: "", idA: "8hEgrvw5Me7gycMzL"});
			exp3AB.insert({idRandom: 638, idB: "", idA: "z3ToF5xHRbwescaes"});
			exp3AB.insert({idRandom: 639, idB: "", idA: "zciucbs7RGSNZMhLW"});
			exp3AB.insert({idRandom: 640, idB: "", idA: "64m3Ymov3XuixeFQc"});
			exp3AB.insert({idRandom: 641, idB: "", idA: "f47bPiGwv6psEW5Zg"});
			exp3AB.insert({idRandom: 642, idB: "", idA: "2jj2RbWGBQeLv4wvh"});
			exp3AB.insert({idRandom: 643, idB: "", idA: "opzanRvj9Kq6HjCpH"});
			exp3AB.insert({idRandom: 644, idB: "", idA: "PSiT695PsasWH4H4Z"});
			exp3AB.insert({idRandom: 645, idB: "", idA: "ZBpDXHHmCLXDKeFy6"});
			exp3AB.insert({idRandom: 646, idB: "", idA: "uXq5fzuCq4Q6h9hKS"});
			exp3AB.insert({idRandom: 647, idB: "", idA: "8QWL3ZAXzrsYu7qs6"});
			exp3AB.insert({idRandom: 648, idB: "", idA: "Ax3NrrmRP6w2C6NaX"});
			exp3AB.insert({idRandom: 649, idB: "", idA: "QxS99EZCi8RG5ZoFG"});
			exp3AB.insert({idRandom: 650, idB: "", idA: "SuNeb5DKpCKbRsE7m"});
			exp3AB.insert({idRandom: 651, idB: "", idA: "8dF4fzgPH4nN7Zgfe"});
			exp3AB.insert({idRandom: 652, idB: "", idA: "Lk98akv5NHuHBNjeH"});
			exp3AB.insert({idRandom: 653, idB: "", idA: "BCeBtKiYeYxXicGvi"});
			exp3AB.insert({idRandom: 654, idB: "", idA: "q72vuHZ4ZeK3HLqYr"});
			exp3AB.insert({idRandom: 655, idB: "", idA: "rjk3xvDkDWbhy6AM5"});
			exp3AB.insert({idRandom: 656, idB: "", idA: "eEnLgAh7z689u5Cvi"});
			exp3AB.insert({idRandom: 657, idB: "", idA: "oAEjR9LDqqPz8Eje6"});
			exp3AB.insert({idRandom: 658, idB: "", idA: "CHE2sD4byG9nC6RFK"});
			exp3AB.insert({idRandom: 659, idB: "", idA: "Yxy9m2rrqPBQevX7u"});
			exp3AB.insert({idRandom: 660, idB: "", idA: "W8HuPMbsvoNF5ws3a"});
			exp3AB.insert({idRandom: 661, idB: "", idA: "KwNFa3AtBdP4vkN7v"});
			exp3AB.insert({idRandom: 662, idB: "", idA: "syJ7gLNmrquTaWk9G"});
			exp3AB.insert({idRandom: 663, idB: "", idA: "jPqabLymBYwthgCgj"});
			exp3AB.insert({idRandom: 664, idB: "", idA: "FNaYYxsPdKnxWYRqL"});
			exp3AB.insert({idRandom: 665, idB: "", idA: "6htTrXzrQkPGqjxNo"});
			exp3AB.insert({idRandom: 666, idB: "", idA: "p9zDRZzTzBHfBdSsN"});
			exp3AB.insert({idRandom: 667, idB: "", idA: "bi4oJgjjNJfoZEinQ"});
			exp3AB.insert({idRandom: 668, idB: "", idA: "6RTQ9XtKDE48YJgRW"});
			exp3AB.insert({idRandom: 669, idB: "", idA: "BFYZBxvvCNkDmqAZ5"});
			exp3AB.insert({idRandom: 670, idB: "", idA: "fnuN69tSMuNCC2BHf"});
			exp3AB.insert({idRandom: 671, idB: "", idA: "2FB74NWeFi8ZxAhLS"});
			exp3AB.insert({idRandom: 672, idB: "", idA: "8evzKt49nh3gHcPLk"});
			exp3AB.insert({idRandom: 673, idB: "", idA: "NCCTRhHmDGG8nRgND"});
			exp3AB.insert({idRandom: 674, idB: "", idA: "htWjE85dGERfdpe5A"});
			exp3AB.insert({idRandom: 675, idB: "", idA: "LXSdxu5hk3D9XiBzf"});
			exp3AB.insert({idRandom: 676, idB: "", idA: "SvDfrvKrP3fDp8LN8"});
			exp3AB.insert({idRandom: 677, idB: "", idA: "MSKfur5hQ7dwcJLyA"});
			exp3AB.insert({idRandom: 678, idB: "", idA: "r4ZxPg9zdAxTun4g2"});
			exp3AB.insert({idRandom: 679, idB: "", idA: "nSKixstD4DGJ6Leci"});
			exp3AB.insert({idRandom: 680, idB: "", idA: "62ZGuc9yk4WpgLbYm"});
			exp3AB.insert({idRandom: 681, idB: "", idA: "Bwj6RLTWwH2ic7qKk"});
			exp3AB.insert({idRandom: 682, idB: "", idA: "FFWu8oBwEake7hRF6"});
			exp3AB.insert({idRandom: 683, idB: "", idA: "5zMJT5mvmhNmmYgJ4"});
			exp3AB.insert({idRandom: 684, idB: "", idA: "kkggbDzNL8hbGi3Zi"});
			exp3AB.insert({idRandom: 685, idB: "", idA: "YYjiaY5CSW49qxska"});
			exp3AB.insert({idRandom: 686, idB: "", idA: "NA3fDLzqWNLmTsEtf"});
			exp3AB.insert({idRandom: 687, idB: "", idA: "FxWvyBjmTtABowHzg"});
			exp3AB.insert({idRandom: 688, idB: "", idA: "Hk9wHJkq2sLNM2xXr"});

          /*
                    exp3AB.insert({idRandom: 21, idB: "", idA: "HnCJyWW9rcFPSt9oh"});
                    exp3AB.insert({idRandom: 22, idB: "", idA: "6q8QWhxZJgsEy7Lpw"});
                    exp3AB.insert({idRandom: 3, idB: "", idA: "tWZWwreeMH3DsGv3K"});
                    exp3AB.insert({idRandom: 4, idB: "", idA: "HM8q7dw9Bj7ycc7zh"});
                    exp3AB.insert({idRandom: 5, idB: "", idA: "w2odYusT8N653nXrf"});
                    exp3AB.insert({idRandom: 6, idB: "", idA: "6Gh4AGGMWTMkHD9FS"});
                    exp3AB.insert({idRandom: 7, idB: "", idA: "QLi57DYZnx6QgoeS5"}); 2: yywMRyJy3YjEifStn
                    exp3AB.insert({idRandom: 8, idB: "", idA: "vQtvAgE7b6TvQTec2"});
                    exp3AB.insert({idRandom: 9, idB: "", idA: "QFEoMvGdk5kJiF3dx"});
                    exp3AB.insert({idRandom: 10, idB: "", idA: "kX7KAFTdzrNkHS6xB"});
                    exp3AB.insert({idRandom: 11, idB: "", idA: "HnCJyWW9rcFPSt9oh"});
                    exp3AB.insert({idRandom: 12, idB: "", idA: "6q8QWhxZJgsEy7Lpw"});
                    exp3AB.insert({idRandom: 13, idB: "", idA: "tWZWwreeMH3DsGv3K"});
                    exp3AB.insert({idRandom: 14, idB: "", idA: "HM8q7dw9Bj7ycc7zh"});
                    exp3AB.insert({idRandom: 15, idB: "", idA: "w2odYusT8N653nXrf"});
                    exp3AB.insert({idRandom: 16, idB: "", idA: "6Gh4AGGMWTMkHD9FS"});
                    exp3AB.insert({idRandom: 17, idB: "", idA: "QLi57DYZnx6QgoeS5"});
                    exp3AB.insert({idRandom: 18, idB: "", idA: "vQtvAgE7b6TvQTec2"});
                    exp3AB.insert({idRandom: 19, idB: "", idA: "QFEoMvGdk5kJiF3dx"});
                    exp3AB.insert({idRandom: 20, idB: "", idA: "kX7KAFTdzrNkHS6xB"});
           exp3AB.insert({idRandom: 210, idB: "", idA: "9QwJXQCDMs5u3TrcC"});
          */
      }
      testText.remove({experimentType: "1", groupId: ""});
      if (testText.find({groupId: "", experimentType: "1"}).count() == 0) {
          testText.insert({experimentType: "1", groupId: "", name: "Budget", pid: 0, testN: 1, text: "There is no direct flight from Nashville to St. Petersburg. So, you have the following options. You can purchase a flight ticket from Nashville to Charlotte and then to New-York for $430. After that, you need to get to Moscow – the capital of Russia and a huge transportation hub. The direct flight from New-York to Moscow is $920. However, there is a possibility to purchase a connecting flight with a stop somewhere in Europe. If you have a Schengen visa why not to spend a nice day in Spain or Finland? A flight from NY to Moscow with 13-hour connection in Helsinki is $720. Unfortunately, the most of this time falls during the night hours. Yet a better option is to make a connection in Barcelona. You will get a chance to explore the city from 7am till midnight, and a ticket costs just $780. Next, you can go from Moscow to St. Petersburg by plane for $190 or by comfortable night train for $80. Additionally, if you can bear slipping in a bus you can take advantage of this type of transportation and save a bit of money. An express bus from Moscow to St. Petersburg will cost you $90, and to get from Nashville to NY is $95.", plen: "1133", markedText: "There is no direct flight from Nashville to St. Petersburg. So, you have the following options. You can purchase a flight ticket <mark>from Nashville to Charlotte and then to New-York for $430</mark>. After that, you need to get to Moscow – the capital of Russia and a huge transportation hub. The direct flight <mark>from New-York to Moscow is $920</mark>. However, there is a possibility to purchase a connecting flight with a stop somewhere in Europe. If you have a Schengen visa why not to spend a nice day in Spain or Finland? <mark>A flight from NY to Moscow with 13-hour connection in Helsinki is $720</mark>. Unfortunately, the most of this time falls during the night hours. Yet a better option is to make a <mark>connection in Barcelona</mark>. You will get a chance to explore the city from 7am till midnight, and <mark>a ticket costs just $780. Next, you can go from Moscow to St. Petersburg by plane for $190 or by comfortable night train for $80</mark>. Additionally, if you can bear slipping in a bus you can take advantage of this type of transportation and save a bit of money. <mark>An express bus from Moscow to St. Petersburg will cost you $90, and to get from Nashville to NY is $95</mark>.", correctText: "There is no direct flight from Nashville to St. Petersburg. So, you have the following options. You can purchase a flight ticket from Nashville to Charlotte and then to New-York for $430. After that, you need to get to Moscow – the capital of Russia and a huge transportation hub. The direct flight from New-York to Moscow is $920. However, there is a possibility to purchase a connecting flight with a stop somewhere in Europe. If you have a Schengen visa why not to spend a nice day in Spain or Finland? A flight from NY to Moscow with 13-hour connection in Helsinki is <mark>$720</mark>. Unfortunately, the most of this time falls during the night hours. Yet a better option is to make a connection in Barcelona. You will get a chance to explore the city from 7am till midnight, and a ticket costs just $780. Next, you can go from Moscow to St. Petersburg by plane for $190 or by comfortable night train for <mark>$80</mark>. Additionally, if you can bear slipping in a bus you can take advantage of this type of transportation and save a bit of money. An express bus from Moscow to St. Petersburg will cost you $90, and to get from Nashville to NY is <mark>$95.</mark>"});
		  testText.insert({experimentType: "1", groupId: "", name: "Budget", pid: 0, testN: 2, text: "Buckle offers the latest fashion trends from a large selection of brands. Big sales on jeans. All items for $70. Ann Taylor - Chic. Luxurious. Elegant. Check out new collection of jeans. When you spend $101+ you get 20% OFF for all new spring styles. A variety of t-shirts for only $12. Banana Republic (upper Level near Nordstrom) is an accessible luxury brand offering high-quality apparel and accessories collections for men and women. Check our designer jeans with versatile, edgy designs that can easily transition from daytime to evening. A new collection of shirts, jackets and t-shirts. Eileen Fisher is known for beautifully simple clothing designed to move with real life. SALES: all t-shirts for $15. Gap offers inventive American style. Sales for shoos: boots from $150, sneakers $100, saddle shoe $80. The Lacoste boutique offers a collection of luxury sportswear for men, women. New arrivals: jeans for $60. Shoos: slip-ons $70, sandals $90, sneakers $110.", plen: "970", markedText: "Buckle offers the latest fashion trends from a large selection of brands. Big sales on jeans. All items for $70. Ann Taylor - Chic. Luxurious. Elegant. Check out new collection of jeans. When you spend $101+ you get 20% OFF for all new spring styles. A variety of t-shirts for only $12. Banana Republic (upper Level near Nordstrom) is an accessible luxury brand offering high-quality apparel and accessories collections for men and women. Check our designer jeans with versatile, edgy designs that can easily transition from daytime to evening. A new collection of shirts, jackets and t-shirts. Eileen Fisher is known for beautifully simple clothing designed to move with real life. SALES: all t-shirts for $15. Gap offers inventive American style. Sales for shoos: boots from $150, sneakers $100, saddle shoe $80. The Lacoste boutique offers a collection of luxury sportswear for men, women. New arrivals: jeans for $60. Shoos: slip-ons $70, sandals $90, sneakers $110.", correctText: "Buckle offers the latest fashion trends from a large selection of brands. Big sales on jeans. All items for $70. Ann Taylor - Chic. Luxurious. Elegant. Check out new collection of jeans. When you spend $101+ you get 20% OFF for all new spring styles. A variety of <mark>t-shirts for only $12</mark>. Banana Republic (upper Level near Nordstrom) is an accessible luxury brand offering high-quality apparel and accessories collections for men and women. Check our designer jeans with versatile, edgy designs that can easily transition from daytime to evening. A new collection of shirts, jackets and t-shirts. Eileen Fisher is known for beautifully simple clothing designed to move with real life. SALES: all t-shirts for $15. Gap offers inventive American style. Sales for shoos: boots from $150, <mark>sneakers $100</mark>, saddle shoe $80. The Lacoste boutique offers a collection of luxury sportswear for men, women. New arrivals: <mark>jeans for $60</mark>. Shoos: slip-ons $70, sandals $90, sneakers $110."});
          testText.insert({experimentType: "1", groupId: "", name: "Budget", pid: 0, testN: 3, text: "Food for Thought Cafe offers an assortment of delicious salads, soups, paninis, sides and desserts located in the Central Library. Our breakfast special: triple egg omelet + chicken sandwich + coffee for $5 only from 8am to 10 am. An Asian inspired bistro serving noodle bowls, Asian salad bowls, banh mi style sandwiches, tea and more located in Alumni Hall. Every day we offer Sushi Lunch for $8. Do you know what's better than a study break? Winning PRIZES while you take a study break! Visit Rand Lounge today at 12:30 p.m., bring your friends and get free unlimited pizza. Join us for our annual showcase – MESA MAHRAJAN! Come enjoy an evening of festive performances, engaging speakers, cultural booths, and of course, delicious Mediterranean FOOD! Tickets are $10 and can be bought at Sarratt. The event will take place this Saturday at 7 pm in the SLC Ballroom. Rand Dining Center is the focal point of the campus community. Its central location, great food, and comfortable atmosphere provide students, faculty, and staff an opportunity to gather, socialize, and interact. We are open every day from 7 am to 8 pm. Try our specials: breakfast (2 French toast slices, 2 eggs & 2 bacon or 2 sausages) $6; lunch (grilled chicken breast with rise or vegetables) $8; dinner (classic meatloaf with potatoes) $9.", plen: "1313", markedText: "Food for Thought Cafe offers an assortment of delicious salads, soups, paninis, sides and desserts located in the Central Library. Our <mark>breakfast special: triple egg omelet + chicken sandwich + coffee for $5</mark> only from 8am to 10 am. An Asian inspired bistro serving noodle bowls, Asian salad bowls, banh mi style sandwiches, tea and more located in Alumni Hall. Every day we offer <mark>Sushi Lunch for $8</mark>. Do you know what's better than a study break? Winning PRIZES while you take a study break! <mark>Visit Rand Lounge today at 12:30 p.m., bring your friends and get free unlimited pizza</mark>. Join us for our annual showcase – MESA MAHRAJAN! Come enjoy an <mark>evening of festive performances, engaging speakers, cultural booths, and of course, delicious Mediterranean FOOD! Tickets are $10</mark> and can be bought at Sarratt. The event will take place this Saturday at 7 pm in the SLC Ballroom. Rand Dining Center is the focal point of the campus community. Its central location, great food, and comfortable atmosphere provide students, faculty, and staff an opportunity to gather, socialize, and interact. We are open every day from 7 am to 8 pm. Try our specials: <mark>breakfast (2 French toast slices, 2 eggs & 2 bacon or 2 sausages) $6; lunch (grilled chicken breast with rise or vegetables) $8; dinner (classic meatloaf with potatoes) $9</mark>.", correctText: "Food for Thought Cafe offers an assortment of delicious salads, soups, paninis, sides and desserts located in the Central Library. Our <mark>breakfast</mark> special: triple egg omelet + chicken sandwich + coffee for <mark>$5</mark> only from 8am to 10 am. An Asian inspired bistro serving noodle bowls, Asian salad bowls, banh mi style sandwiches, tea and more located in Alumni Hall. Every day we offer Sushi Lunch for $8. Do you know what's better than a study break? Winning PRIZES while you take a study break! Visit Rand Lounge today <mark>at 12:30 p.m.</mark>, bring your friends and get <mark>free unlimited pizza</mark>. Join us for our annual showcase – MESA MAHRAJAN! Come enjoy an evening of festive performances, engaging speakers, cultural booths, and of course, delicious Mediterranean FOOD! Tickets are $10 and can be bought at Sarratt. The event will take place this Saturday at 7 pm in the SLC Ballroom. Rand Dining Center is the focal point of the campus community. Its central location, great food, and comfortable atmosphere provide students, faculty, and staff an opportunity to gather, socialize, and interact. We are open every day from 7 am to 8 pm. Try our specials: breakfast (2 French toast slices, 2 eggs & 2 bacon or 2 sausages) $6; lunch (grilled chicken breast with rise or vegetables) $8; <mark>dinner</mark> (classic meatloaf with potatoes) <mark>$9</mark>."});

          testText.insert({experimentType: "1", groupId: "", name: "Events", pid: 0, testN: 1, text: "One of the world's most beautiful cities, St. Petersburg has all the ingredients for an unforgettable travel experience. Situated on the Neva River, it was founded by Tsar Peter the Great on May 27, 1703. The Historic Centre, represented by architecture of notable Bartolomeo Rastrelli, constitutes a UNESCO World Heritage Site. Neva River divides the historic center onto east and west parts. So, to move from one part to the other you need to take into account the Palace Bridge openings schedule. It is open from 1:25 pm to 2:15 pm and from 3:10 pm to 4:55 pm. Only when a drawbridge (a moveable bridge that lets ships pass through) is closed you can easily get from the east part to the west. There are many free city tours in St. Petersburg. For example, on Monday you can visit the Hermitage from 10:00 am to 1:00 pm; and on Tuesday from 11:00 am to 1:30 pm you can walk with a guide along Nevsky Prospekt on the east bank of Neva or from 3:30 pm to 6:00 take a tour to Winter Palace, which is on the west bank.", plen: "1017", markedText: "One of the world's most beautiful cities, St. Petersburg has all the ingredients for an unforgettable travel experience. Situated on the Neva River, it was founded by Tsar Peter the Great on May 27, 1703. The Historic Centre, represented by architecture of notable Bartolomeo Rastrelli, constitutes a UNESCO World Heritage Site. Neva River divides the historic center onto east and west parts. So, to move from one part to the other you need to take into account the <mark>Palace Bridge openings schedule. It is open from 1:25 pm to 2:15 pm and from 3:10 pm to 4:55 pm. Only when a drawbridge (a moveable bridge that lets ships pass through) is closed you can easily get from the east part to the west</mark>. There are many free city tours in St. Petersburg. For example, <mark>on Monday you can visit the Hermitage from 10:00 am to 1:00 pm; and on Tuesday from 11:00 am to 1:30 pm you can walk with a guide along Nevsky Prospekt on the east bank of Neva or from 3:30 pm to 6:00 take a tour to Winter Palace, which is on the west bank</mark>.", correctText: "One of the world's most beautiful cities, St. Petersburg has all the ingredients for an unforgettable travel experience. Situated on the Neva River, it was founded by Tsar Peter the Great on May 27, 1703. The Historic Centre, represented by architecture of notable Bartolomeo Rastrelli, constitutes a UNESCO World Heritage Site. Neva River divides the historic center onto east and west parts. So, to move from one part to the other you need to take into account the Palace Bridge openings schedule. It is open from 1:25 pm <mark>to 2:15 pm and from 3:10 pm</mark> to 4:55 pm. <mark>Only when a drawbridge (a moveable bridge that lets ships pass through) is closed you can easily get from the east part to the west</mark>. There are many free city tours in St. Petersburg. For example, on <mark>Monday</mark> you can visit the Hermitage <mark>from 10:00 am to 1:00 pm</mark>; and on <mark>Tuesday from 11:00 am to 1:30 pm</mark> you can walk with a guide along Nevsky Prospekt on the east bank of Neva or <mark>from 3:30 pm to 6:00</mark> take a tour to Winter Palace, which is on the west bank."});
          testText.insert({experimentType: "1", groupId: "", name: "Events", pid: 0, testN: 2, text: "Do you know what's better than a study break? Winning PRIZES while you take a study break! Visit Rand Lounge this Thursday at 7:00 p.m., bring your friends and get free unlimited pizza. Passport to Nashville is a program that allows students to visit great landmarks and venues around Nashville. Our next tour will take place this Thursday at 1:00 pm and take two hours. Join us for our annual showcase – MESA MAHRAJAN! Come enjoy an evening of festive performances, engaging speakers, cultural booths, and of course, delicious Mediterranean FOOD! Tickets are $10 and can be bought at Sarratt. The event will take place this Saturday at 7 pm in the SLC Ballroom. This Sunday, come out to learn more about the traditions that are a part of Saraswati Puja festival, participate in a short puja, and enjoy kheer and chai from Sitar. Feel free to dress up in Indian attire! 11 am @ OUCRL Harambee is a Swahili word for 'all pull together' and is a reflection of how the Harambee showcase is created. Join us for a night celebrating the rich diversity and heritage of the African continent through dancing, acting, modeling, and spoken word! Saturday. Dinner in the SLC: 5 to 6 pm. Show at Langford: 6 to 7 pm.", plen: "1205", markedText: "Do you know what's better than a study break? Winning PRIZES while you take a study break! Visit Rand Lounge <mark>this Thursday at 7:00 p.m.</mark>, bring your friends and get free unlimited pizza. Passport to Nashville is a program that allows students to visit great landmarks and venues around Nashville. Our next tour will take place this <mark>Thursday at 1:00 pm and take two hours</mark>. Join us for our annual showcase – MESA MAHRAJAN! Come enjoy an evening of festive performances, engaging speakers, cultural booths, and of course, delicious Mediterranean FOOD! Tickets are $10 and can be bought at Sarratt. The event will take place <mark>this Saturday at 7 pm</mark> in the SLC Ballroom. <mark>This Sunday, come out to learn more about the traditions that are a part of Saraswati Puja festival</mark>, participate in a short puja, and enjoy kheer and chai from Sitar. Feel free to dress up in Indian attire! <mark>11 am @ OUCRL</mark> Harambee is a Swahili word for 'all pull together' and is a reflection of how the Harambee showcase is created. Join us for a night celebrating the rich diversity and heritage of the African continent through dancing, acting, modeling, and spoken word! <mark>Saturday. Dinner in the SLC: 5 to 6 pm. Show at Langford: 6 to 7 pm.</mark>", correctText: "Do you know what's better than a study break? Winning PRIZES while you take a study break! Visit Rand Lounge this <mark>Thursday at 7:00 p.m.</mark>, bring your friends and get free unlimited pizza. Passport to Nashville is a program that allows students to visit great landmarks and venues around Nashville. Our next tour will take place this <mark>Thursday at 1:00 pm</mark> and take two hours. Join us for our annual showcase – MESA MAHRAJAN! Come enjoy an evening of festive performances, engaging speakers, cultural booths, and of course, delicious Mediterranean FOOD! Tickets are $10 and can be bought at Sarratt. The event will take place this <mark>Saturday at 7 pm</mark> in the SLC Ballroom. This <mark>Sunday</mark>, come out to learn more about the traditions that are a part of Saraswati Puja festival, participate in a short puja, and enjoy kheer and chai from Sitar. Feel free to dress up in Indian attire! <mark>11 am</mark> @ OUCRL Harambee is a Swahili word for 'all pull together' and is a reflection of how the Harambee showcase is created. Join us for a night celebrating the rich diversity and heritage of the African continent through dancing, acting, modeling, and spoken word! <mark>Saturday</mark>. Dinner in the SLC: <mark>5 to 6 pm</mark>. Show at Langford: <mark>6 to 7 pm</mark>."});
          testText.insert({experimentType: "1", groupId: "", name: "Events", pid: 0, testN: 3, text: "CS-3250: Algorithms. Advanced data structures, systematic study and analysis of important algorithms for searching. Spring term. Days: Monday, Wednesday, Friday. Time: 01:10p - 02:00p. CS-3251: Intermediate Software Design. High quality development and reuse of architectural patterns, design patterns, and software components. Fall term. Days: Monday, Wednesday, Friday. Time: 01:15p - 02:05p. CS-3258: Introduction to Computer Graphics. Featuring 2D rendering and image-based techniques, graphics pipeline, ray-tracing, and texture-mapping. Days: Tuesday, Thursday. Time: 11:00a - 12:15p. Spring term. CS-3252: Theory of Automata, Formal Languages, and Computation. Finite-state machines and regular expressions. Spring term. Time: 01:05p - 01:55p. Days: Tuesday, Thursday. CS-2231: Computer Organization. The entire hierarchical structure of computer architecture, beginning at the lowest level with a simple machine model. Fall term. Days: Tuesday, Thursday. Time: 11:10a - 12:25p. CS-3270: Programming Languages. Spring term. Time: 09:10a - 10:00a. Days: Monday, Wednesday. General criteria for design, implementation, and evaluation of programming languages. Historical perspective.", plen: "1188", markedText: "CS-3250: Algorithms. Advanced data structures, systematic study and analysis of important algorithms for searching. <mark>Spring term. Days: Monday, Wednesday, Friday. Time: 01:10p - 02:00p</mark>. CS-3251: Intermediate Software Design. High quality development and reuse of architectural patterns, design patterns, and software components. <mark>Fall term. Days: Monday, Wednesday, Friday. Time: 01:15p - 02:05p</mark>. CS-3258: Introduction to Computer Graphics. Featuring 2D rendering and image-based techniques, graphics pipeline, ray-tracing, and texture-mapping. <mark>Days: Tuesday, Thursday. Time: 11:00a - 12:15p. Spring term</mark>. CS-3252: Theory of Automata, Formal Languages, and Computation. Finite-state machines and regular expressions. <mark>Spring term. Time: 01:05p - 01:55p. Days: Tuesday, Thursday</mark>. CS-2231: Computer Organization. The entire hierarchical structure of computer architecture, beginning at the lowest level with a simple machine model. <mark>Fall term. Days: Tuesday, Thursday. Time: 11:10a - 12:25p</mark>. CS-3270: Programming Languages. <mark>Spring term. Time: 09:10a - 10:00a. Days: Monday, Wednesday</mark>. General criteria for design, implementation, and evaluation of programming languages. Historical perspective.", correctText: "CS-3250: Algorithms. Advanced data structures, systematic study and analysis of important algorithms for searching. <mark>Spring</mark> term. Days: <mark>Monday, Wednesday, Friday</mark>. Time: <mark>01:10p - 02:00p</mark>. CS-3251: Intermediate Software Design. High quality development and reuse of architectural patterns, design patterns, and software components. <mark>Fall</mark> term. Days: Monday, Wednesday, Friday. Time: 01:15p - 02:05p. CS-3258: Introduction to Computer Graphics. Featuring 2D rendering and image-based techniques, graphics pipeline, ray-tracing, and texture-mapping. Days: <mark>Tuesday, Thursday</mark>. Time: <mark>11:00a - 12:15p. Spring</mark> term. CS-3252: Theory of Automata, Formal Languages, and Computation. Finite-state machines and regular expressions. <mark>Spring</mark> term. Time: <mark>01:05p - 01:55p</mark>. Days: <mark>Tuesday, Thursday</mark>. CS-2231: Computer Organization. The entire hierarchical structure of computer architecture, beginning at the lowest level with a simple machine model. <mark>Fall</mark> term. Days: Tuesday, Thursday. Time: 11:10a - 12:25p. CS-3270: Programming Languages. <mark>Spring</mark> term. Time: <mark>09:10a - 10:00a</mark>. Days: <mark>Monday, Wednesday</mark>. General criteria for design, implementation, and evaluation of programming languages. Historical perspective."});

          testText.insert({experimentType: "1", groupId: "", name: "Famous", pid: 0, testN: 1, text: "One of the world's most beautiful cities, St. Petersburg has all the ingredients for an unforgettable travel experience. Situated on the Neva River, it was founded by Tsar Peter the Great on May 27, 1703. The Historic Center, represented by architecture of notable Bartolomeo Rastrelli, constitutes a UNESCO World Heritage Site. Neva River divides the historic center onto east and west parts which are connected by numerous drawbridges (moveable bridges that let ships pass through). Drawbridges by themselves are considered as aesthetic masterpieces. Great artists like Ivan Shishkin and Ilya Repin walked along those bridges. Today, many visitors also try to commemorate their names and scribe messages like “Smith was here” or “D. Williams. 2016”. Palace Bridge spans the historic center of St. Petersburg. When raised at night, it provides one of the most spectacular views in the city, as well as gathering point for thousands of revelers during the White Nights.", plen: "969", markedText: "One of the world's most beautiful cities, St. Petersburg has all the ingredients for an unforgettable travel experience. Situated on the Neva River, it was founded by Tsar <mark>Peter the Great</mark> on May 27, 1703. The Historic Center, represented by architecture of notable <mark>Bartolomeo Rastrelli</mark>, constitutes a UNESCO World Heritage Site. Neva River divides the historic center onto east and west parts which are connected by numerous drawbridges (moveable bridges that let ships pass through). Drawbridges by themselves are considered as aesthetic masterpieces. Great artists like <mark>Ivan Shishkin and Ilya Repin</mark> walked along those bridges. Today, many visitors also try to commemorate their names and scribe messages like “<mark>Smith was here” or “D. Williams. 2016</mark>”. Palace Bridge spans the historic center of St. Petersburg. When raised at night, it provides one of the most spectacular views in the city, as well as gathering point for thousands of revelers during the White Nights.", correctText: "One of the world's most beautiful cities, St. Petersburg has all the ingredients for an unforgettable travel experience. Situated on the Neva River, it was founded by Tsar <mark>Peter the Great</mark> on May 27, 1703. The Historic Center, represented by architecture of notable <mark>Bartolomeo Rastrelli</mark>, constitutes a UNESCO World Heritage Site. Neva River divides the historic center onto east and west parts which are connected by numerous drawbridges (moveable bridges that let ships pass through). Drawbridges by themselves are considered as aesthetic masterpieces. Great artists like <mark>Ivan Shishkin</mark> and <mark>Ilya Repin</mark> walked along those bridges. Today, many visitors also try to commemorate their names and scribe messages like “Smith was here” or “D. Williams. 2016”. Palace Bridge spans the historic center of St. Petersburg. When raised at night, it provides one of the most spectacular views in the city, as well as gathering point for thousands of revelers during the White Nights."});
          testText.insert({experimentType: "1", groupId: "", name: "Famous", pid: 0, testN: 2, text: "Greta Garbo made one film in Sweden and a second in Germany before coming to Hollywood. The camera loved her, and she made 10 silent films in five years. She became even more successful after her first sound film. Charlie Chaplin is the most famous actor of the silent era. After a decade making shorts, he produced feature films in his own studio, and was the only film-maker able to ignore the coming of sound. The Great Dictator was Chaplin's first true sound film. Rudolph Valentino was an Italian actor who starred in several well-known silent films. He was an early pop icon known as the 'Latin lover'. He had applied for American citizenship shortly before his untimely death in 1926 before the beginning of sound film era. William S Hart was the pre-eminent silent westerner and embodied 'the good-bad man', a figure in search of redemption. He bowed out as an actor in 1925. 'Blue Skies' is a popular song that became one of the first songs to be featured in a talkie, when Al Jolson performed it in a musical film The Jazz Singer.", plen: "1040", markedText: "<mark>Greta Garbo</mark> made one film in Sweden and a second in Germany before coming to Hollywood. The camera loved her, and she made 10 silent films in five years. She became even more successful after her first sound film. <mark>Charlie Chaplin</mark> is the most famous actor of the silent era. After a decade making shorts, he produced feature films in his own studio, and was the only film-maker able to ignore the coming of sound. The Great Dictator was Chaplin's first true sound film. <mark>Rudolph Valentino</mark> was an Italian actor who starred in several well-known silent films. He was an early pop icon known as the 'Latin lover'. He had applied for American citizenship shortly before his untimely death in 1926 before the beginning of sound film era. <mark>William S Hart</mark> was the pre-eminent silent westerner and embodied 'the good-bad man', a figure in search of redemption. He bowed out as an actor in 1925. 'Blue Skies' is a popular song that became one of the first songs to be featured in a talkie, when <mark>Al Jolson</mark> performed it in a musical film The Jazz Singer.", correctText: "<mark>Greta Garbo</mark> made one film in Sweden and a second in Germany before coming to Hollywood. The camera loved her, and she made 10 silent films in five years. She became even more successful after her first sound film. <mark>Charlie Chaplin</mark> is the most famous actor of the silent era.  After a decade making shorts, he produced feature films in his own studio, and was the only film-maker able to ignore the coming of sound. The Great Dictator was Chaplin's first true sound film. Rudolph Valentino was an Italian actor who starred in several well-known silent films. He was an early pop icon known as the 'Latin lover'. He had applied for American citizenship shortly before his untimely death in 1926 before the beginning of sound film era. William S Hart was the pre-eminent silent westerner and embodied 'the good-bad man', a figure in search of redemption. He bowed out as an actor in 1925. 'Blue Skies' is a popular song that became one of the first songs to be featured in a talkie, when <mark>Al Jolson</mark> performed it in a musical film The Jazz Singer."});
          testText.insert({experimentType: "1", groupId: "", name: "Famous", pid: 0, testN: 3, text: "Gone with the Wind is a 1939 American epic historical romance film adapted from Margaret Mitchell's 1936 novel Gone with the Wind. It was produced by David O. Selznick and directed by Victor Fleming. The film tells the story of Scarlett O'Hara, the strong-willed daughter of a Georgia plantation owner, from her romantic pursuit of Ashley Wilkes, who is married to his cousin, Melanie Hamilton, to her marriage to Rhett Butler. The leading roles are portrayed by Vivien Leigh (Scarlett), Clark Gable (Rhett), Leslie Howard (Ashley), and Olivia de Havilland (Melanie). The original director, George Cukor, was fired shortly after filming had begun and was replaced by Fleming, who in turn was briefly replaced by Sam Wood while Fleming took some time off due to exhaustion. Paulette Goddard and Vivien Leigh were screen-tested for Scarlett. Goddard almost won the role, but controversy over her marriage with Charlie Chaplin caused Selznick to change his mind.", plen: "959", markedText: "Gone with the Wind is a 1939 American epic historical romance film adapted from <mark>Margaret Mitchell's</mark> 1936 novel Gone with the Wind. It was produced by <mark>David O. Selznick and directed by Victor Fleming</mark>. The film tells the story of <mark>Scarlett O'Hara</mark>, the strong-willed daughter of a Georgia plantation owner, from her romantic pursuit of <mark>Ashley Wilkes, who is married to his cousin, Melanie Hamilton, to her marriage to Rhett Butler. The leading roles are portrayed by Vivien Leigh (Scarlett), Clark Gable (Rhett), Leslie Howard (Ashley), and Olivia de Havilland (Melanie)</mark>. The original director, <mark>George Cukor</mark>, was fired shortly after filming had begun and was replaced by Fleming, who in turn was briefly replaced by <mark>Sam Wood</mark> while Fleming took some time off due to exhaustion. <mark>Paulette Goddard and Vivien Leigh</mark> were screen-tested for Scarlett. Goddard almost won the role, but controversy over her marriage with <mark>Charlie Chaplin</mark> caused Selznick to change his mind.", correctText: "Gone with the Wind is a 1939 American epic historical romance film adapted from Margaret Mitchell's 1936 novel Gone with the Wind. It was produced <mark>by David O. Selznick</mark> and directed by <mark>Victor Fleming</mark>. The film tells the story of Scarlett O'Hara, the strong-willed daughter of a Georgia plantation owner, from her romantic pursuit of <mark>Ashley Wilkes</mark>, who is married to his cousin, Melanie Hamilton, to her marriage to <mark>Rhett Butler</mark>. The leading roles are portrayed by Vivien Leigh (Scarlett), <mark>Clark Gable</mark> (Rhett), <mark>Leslie Howard</mark> (Ashley), and Olivia de Havilland (Melanie). The original director, <mark>George Cukor</mark>, was fired shortly after filming had begun and was replaced by Fleming, who in turn was briefly replaced by <mark>Sam Wood</mark>   while Fleming took some time off due to exhaustion. Paulette Goddard and Vivien Leigh were screen-tested for Scarlett. Goddard almost won the role, but controversy over her marriage with <mark>Charlie Chaplin</mark> caused Selznick to change his mind."});
          console.log('testText.count(): ', testText.find().count());
      }
      mainText.remove({experimentType: "1", groupId: ""});
      console.log('mainText.count: ', mainText.find({groupId: "", experimentType: "1"}).count());
      if (mainText.find({groupId: "", experimentType: "1"}).count() == 0) {
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 1, text: "In the midst of Hohe Tauern National Park and in the heart of Salzburg province lies Bad Gastein. The actual name ‘Gastein’ is first mentioned in a document from the year 1203. In the 19th century the waters of Bad Gastein became a fashionable resort, visited by European monarchs as well as the rich and famous. Numerous illustrious guests, such as Emperor Franz Josef I, Prince Bismarck, Schopenhauer and many others, gave Gastein the reputation of a modern, cosmopolitan spa destination.", plen: "490", markedText: "In the midst of Hohe Tauern National Park and in the heart of Salzburg province lies Bad Gastein. The actual name ‘Gastein’ is first mentioned in a document from the year 1203. In the 19th century the waters of Bad Gastein became a fashionable resort, visited by European monarchs as well as the rich and famous. Numerous illustrious guests, such as Emperor Franz Josef I, Prince Bismarck, Schopenhauer and many others, gave Gastein the reputation of a modern, cosmopolitan spa destination."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 2, text: "Nearby airports locate in Vienna and Salzburg. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old.", plen: "164", markedText: "Nearby airports locate in Vienna and Salzburg. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 3, text: "The Gastein valley is accessible by the Tauern Railway. It was not until under Habsburg Archduke Ferdinand III that railway development was revived. Emperor Francis I also lent his considerable weight to its increased profile. Mass tourism was pushed by the opening of the Tauern Railway station in 1905. Frequent EuroCity and InterCity trains going along Tauern Railway connect Bad Gastein with many Austrian cities like Vienna, Linz, Salzburg and Graz along a single circuit. Train ticket is 20 euro per person.", plen: "513", markedText: "The Gastein valley is accessible by the Tauern Railway. It was not until under Habsburg Archduke Ferdinand III that railway development was revived. Emperor Francis I also lent his considerable weight to its increased profile. Mass tourism was pushed by the opening of the Tauern Railway station in 1905. Frequent EuroCity and InterCity trains going along Tauern Railway connect Bad Gastein with many Austrian cities like Vienna, Linz, Salzburg and Graz along a single circuit. Train ticket is 20 euro per person."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 4, text: "After major setbacks caused by the wars of the 20th century, the winter of 1945/46 saw the beginning of construction of a ski lift on the Graukogel. Which rang in a new era for Gastein Valley: this was the advent of winter sports.", plen: "230", markedText: "After major setbacks caused by the wars of the 20th century, the winter of 1945/46 saw the beginning of construction of a ski lift on the Graukogel. Which rang in a new era for Gastein Valley: this was the advent of winter sports."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 5, text: "World Cup on the 4th of January 2017! At the Buchebenwiese, next to the Stubnerkogel bottom station of the cable car, the boarders elite will fight for their first medals in 2017. A great atmosphere and tough runs are guaranteed! Free admission for public.", plen: "256", markedText: "World Cup on the 4th of January 2017! At the Buchebenwiese, next to the Stubnerkogel bottom station of the cable car, the boarders elite will fight for their first medals in 2017. A great atmosphere and tough runs are guaranteed! Free admission for public."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 6, text: "After a one-year break, the international freeski elite will be back in Bad Gastein, Salzburg, Austria. The winter destination is preparing for the 7th edition of Red Bull PlayStreets. 01/15/2017 the world’s best artists on two “planks” will entertain thousands of spectators! Free admission!", plen: "292", markedText: "After a one-year break, the international freeski elite will be back in Bad Gastein, Salzburg, Austria. The winter destination is preparing for the 7th edition of Red Bull PlayStreets. 01/15/2017 the world’s best artists on two “planks” will entertain thousands of spectators! Free admission!"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 7, text: "Since 2007, the town also annually hosts the Gastein Ladies tennis tournament, an International event on the WTA Tour, attracting top players like Julia Görges. The prominent athletes who were born in Bad Gastein are Thea Hochleitner an alpine skier and Hans Eder a Nordic skier.", plen: "279", markedText: "Since 2007, the town also annually hosts the Gastein Ladies tennis tournament, an International event on the WTA Tour, attracting top players like Julia Görges. The prominent athletes who were born in Bad Gastein are Thea Hochleitner an alpine skier and Hans Eder a Nordic skier."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 8, text: "Whether you are skiing or boarding, in Gastein's four ski areas, with 200 kilometers of slopes and snows you can always count on, you are certain to find the hill of your dreams!", plen: "178", markedText: "Whether you are skiing or boarding, in Gastein's four ski areas, with 200 kilometers of slopes and snows you can always count on, you are certain to find the hill of your dreams!"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 9, text: "Gastein Ski Pass Prices and Season Dates for 2016/2017:", plen: "55", markedText: "Gastein Ski Pass Prices and Season Dates for 2016/2017:"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 10, text: "6-day ski pass: adults 240 €, juniors (from 12 to 17 years old) 180 €, children 120 €.", plen: "86", markedText: "6-day ski pass: adults 240 €, juniors (from 12 to 17 years old) 180 €, children 120 €."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 11, text: "4-day ski pass: adults 180 €, juniors (from 12 to 17 years old) 110 €, children 90 €.", plen: "85", markedText: "4-day ski pass: adults 180 €, juniors (from 12 to 17 years old) 110 €, children 90 €."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 12, text: "From 18.01.2017 there is a free ski-pass for children of your own family up to the age of 15 when one parent purchases a ski-pass (valid for min. 6 day ski-pass).", plen: "162", markedText: "From 18.01.2017 there is a free ski-pass for children of your own family up to the age of 15 when one parent purchases a ski-pass (valid for min. 6 day ski-pass)."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 13, text: "The best Gastein offers apartments for 2 adults and 1 child from 23th of December to 6th of January:", plen: "100", markedText: "The best Gastein offers apartments for 2 adults and 1 child from 23th of December to 6th of January:"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 14, text: "HAUS AM LIFT - 1100 euro (breakfast lunch and dinner included)", plen: "62", markedText: "HAUS AM LIFT - 1100 euro (breakfast lunch and dinner included)"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 15, text: "HAUS MARIA - 820 euro, (plus 300 euro for meals)", plen: "48", markedText: "HAUS MARIA - 820 euro, (plus 300 euro for meals)"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 16, text: "APPARTEMENT ACHENBLICK (meals are included) - 1300 euro.", plen: "56", markedText: "APPARTEMENT ACHENBLICK (meals are included) - 1300 euro."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 17, text: "A stylish ambiance awaits you at the Hotel Salzburger Hof. In 1889 it consisted of at least 3 major buildings built by the famous Italian builder Angelo Comini. In the 80's and 90's famous artists stayed there such as Anita Ekberg, Liza Minelli and many more.", plen: "259", markedText: "A stylish ambiance awaits you at the Hotel Salzburger Hof. In 1889 it consisted of at least 3 major buildings built by the famous Italian builder Angelo Comini. In the 80's and 90's famous artists stayed there such as Anita Ekberg, Liza Minelli and many more."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 18, text: "World-famous Gastein Waterfall, which is flanked by magnificent houses, is also a part of the characteristic picture of this village in the Gastein Valley. We encourage you to visit the waterfall which is located right in the center and has been used as a motive of many well-known painters.", plen: "291", markedText: "World-famous Gastein Waterfall, which is flanked by magnificent houses, is also a part of the characteristic picture of this village in the Gastein Valley. We encourage you to visit the waterfall which is located right in the center and has been used as a motive of many well-known painters."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 19, text: "The composer Franz Schubert composed his Piano Sonata in D Major in Bad Gastein, and was once believed to have sketched a Gmunden-Gastein Symphony (D. 849) during his stay in August and September 1825.", plen: "201", markedText: "The composer Franz Schubert composed his Piano Sonata in D Major in Bad Gastein, and was once believed to have sketched a Gmunden-Gastein Symphony (D. 849) during his stay in August and September 1825."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 20, text: "Standing at the entrance to Gastein Valley is Klammstein Castle. A free guided tour amidst its ancient castle walls sheds fascinating light on this, the oldest structure in the Gastein Valley. It is open for public every Sunday from 10:00 am to 2:00 pm.", plen: "253", markedText: "Standing at the entrance to Gastein Valley is Klammstein Castle. A free guided tour amidst its ancient castle walls sheds fascinating light on this, the oldest structure in the Gastein Valley. It is open for public every Sunday from 10:00 am to 2:00 pm."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 21, text: "Skiers and snowboarders can even enjoy art while descending the slopes. The festival, where illuminated photographs and cool sculptures can be admired, takes place from 28th December to 15th January 2017 throughout Gastein. The entrance is free.", plen: "245", markedText: "Skiers and snowboarders can even enjoy art while descending the slopes. The festival, where illuminated photographs and cool sculptures can be admired, takes place from 28th December to 15th January 2017 throughout Gastein. The entrance is free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 22, text: "Whether skiing, snowboarding, race camp, or a snow adventure, Schlossalm ski school is here to provide guests with optimal supervision and individual learning! Full day price for children up to 14 years: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro.", plen: "362", markedText: "Whether skiing, snowboarding, race camp, or a snow adventure, Schlossalm ski school is here to provide guests with optimal supervision and individual learning! Full day price for children up to 14 years: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 23, text: "When a four-time World Cup winner like Hans Grugger puts his name behind a new training concept, that carries a lot of weight. Ski Race Academy Gastein provides support to racers, both current and aspiring, through custom-tailored courses. The school offers lessons of ski racing for advanced skiers. One-day lesson is 60 euro for a person.", plen: "340", markedText: "When a four-time World Cup winner like Hans Grugger puts his name behind a new training concept, that carries a lot of weight. Ski Race Academy Gastein provides support to racers, both current and aspiring, through custom-tailored courses. The school offers lessons of ski racing for advanced skiers. One-day lesson is 60 euro for a person."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 24, text: "Ski Rental. Ski+boots for kids up to 14 years: 10 euro per day. Ski+boots for adults: 15 euro per day. ATTENTION: the 7th day rental is FREE for all items!", plen: "155", markedText: "Ski Rental. Ski+boots for kids up to 14 years: 10 euro per day. Ski+boots for adults: 15 euro per day. ATTENTION: the 7th day rental is FREE for all items!"});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 25, text: "On the 01.05.2017, there is a special kind of experience for visitors in Sportgastein. Not only alpine and cross-country skiers will demonstrate their stamina on the slopes and trails, also our canine 'athletes' will be giving it all they’ve got. So you have the unique opportunity to cheer on national and international dog sledding teams vying for the Alpen Trophy. There is no fee to attend this event.", plen: "405", markedText: "On the 01.05.2017, there is a special kind of experience for visitors in Sportgastein. Not only alpine and cross-country skiers will demonstrate their stamina on the slopes and trails, also our canine 'athletes' will be giving it all they’ve got. So you have the unique opportunity to cheer on national and international dog sledding teams vying for the Alpen Trophy. There is no fee to attend this event."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 26, text: "At Gastein‘s Felsentherme spa resort, you will find areas for quiet relaxation and enjoyable activities in and around the water, also able to enjoy the glorious setting of the outdoor facilities. Prices per day: adults EUR 15,00; children EUR 7,50. Kiddie's special' children with min. 1 adult EUR 5,00. Open every day from 9:00 am till midnight.", plen: "346", markedText: "At Gastein‘s Felsentherme spa resort, you will find areas for quiet relaxation and enjoyable activities in and around the water, also able to enjoy the glorious setting of the outdoor facilities. Prices per day: adults EUR 15,00; children EUR 7,50. Kiddie's special' children with min. 1 adult EUR 5,00. Open every day from 9:00 am till midnight."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 27, text: "In the 50's and 60's many famous spa guests came to Bad Gastein, such as Tyrone Power, Lady Churchill and many more.", plen: "116", markedText: "In the 50's and 60's many famous spa guests came to Bad Gastein, such as Tyrone Power, Lady Churchill and many more."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 28, text: "The historical town center of Bad Gastein, with its pedestrian areas illuminated by Christmas lights, provides the unique setting for festive Advent markets. Tradition and variety are guaranteed by local folk-music groups, brass ensembles and Nativity plays. And be sure to attend the unique parades of costumed Krampus figures, here in the midst of an idyllic winter world of boundless romance. The Advent market is open from 12/15/2016 to 01/10/1017 every day from 3 to 8 pm.", plen: "477", markedText: "The historical town center of Bad Gastein, with its pedestrian areas illuminated by Christmas lights, provides the unique setting for festive Advent markets. Tradition and variety are guaranteed by local folk-music groups, brass ensembles and Nativity plays. And be sure to attend the unique parades of costumed Krampus figures, here in the midst of an idyllic winter world of boundless romance. The Advent market is open from 12/15/2016 to 01/10/1017 every day from 3 to 8 pm."});
          mainText.insert({experimentType: "1", groupId: "", name: "Gastein", pid: 29, text: "Numerous points of interest, around which there swirl many different stories, provide insights into the historical development of the valley. Every Sunday at 12:30 pm free historical walking tours are offered - for details, please contact the Gastein Museum.", plen: "258", markedText: "Numerous points of interest, around which there swirl many different stories, provide insights into the historical development of the valley. Every Sunday at 12:30 pm free historical walking tours are offered - for details, please contact the Gastein Museum."});

          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 1, text: "The Principality of Andorra is a tiny independent state located in the Pyrenees, in Southern Europe, between France and Spain. Tradition holds that Charles the Great granted a charter to the Andorran people in return for fighting against the Moors. You can learn more about medieval history of Andorra by visiting the local museum. It is free and open from Monday to Sunday from 8 am to 5 pm.", plen: "392", markedText: "The Principality of Andorra is a tiny independent state located in the Pyrenees, in Southern Europe, between France and Spain. Tradition holds that Charles the Great granted a charter to the Andorran people in return for fighting against the Moors. You can learn more about medieval history of Andorra by visiting the local museum. It is free and open from Monday to Sunday from 8 am to 5 pm."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 2, text: "In 1933, France occupied Andorra. During World War II, Andorra remained neutral and was an important smuggling route between Vichy France and Spain. In 1939, Jacques Tremoulet was a French radio and press tycoon who founded Radio Andorra. Between 1940 and 1944, Radio Andorra was the only French-speaking private radio that was able to broadcast freely without any political control. The other private radio stations owned by Tremoulet which were located in France were under control of the Vichy government regime.", plen: "515", markedText: "In 1933, France occupied Andorra. During World War II, Andorra remained neutral and was an important smuggling route between Vichy France and Spain. In 1939, Jacques Tremoulet was a French radio and press tycoon who founded Radio Andorra. Between 1940 and 1944, Radio Andorra was the only French-speaking private radio that was able to broadcast freely without any political control. The other private radio stations owned by Tremoulet which were located in France were under control of the Vichy government regime."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 3, text: "From 29/11/2016 to 29/01/2017 you can visit Museu del Tabac. The display that can be seen at the Tobacco Museum perfectly reflects the feeling of its author. “This display is a tribute to some of the places that changed my life and which now I want to share with the dreamers of freedom and the pilgrims of solitude”. Opening hours: daily from 8 am to 5 pm. Admission is free.", plen: "376", markedText: "From 29/11/2016 to 29/01/2017 you can visit Museu del Tabac. The display that can be seen at the Tobacco Museum perfectly reflects the feeling of its author. “This display is a tribute to some of the places that changed my life and which now I want to share with the dreamers of freedom and the pilgrims of solitude”. Opening hours: daily from 8 am to 5 pm. Admission is free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 4, text: "Given Andorra’s strategic location and political features, establishing very close links with its neighboring countries in southwestern Europe, the Pyrenean principality has traditionally attracted foreign visitors who eventually settle down and make of Andorra their new home. The prominent medievalist Philippe Wolff was born in Tolouse, but he lived in retirement in Andorra between 1984 and 2001. Three times winner of the Dakar Rally, Cyril Despres is an Andorran resident since 2000.", plen: "489", markedText: "Given Andorra’s strategic location and political features, establishing very close links with its neighboring countries in southwestern Europe, the Pyrenean principality has traditionally attracted foreign visitors who eventually settle down and make of Andorra their new home. The prominent medievalist Philippe Wolff was born in Tolouse, but he lived in retirement in Andorra between 1984 and 2001. Three times winner of the Dakar Rally, Cyril Despres is an Andorran resident since 2000."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 5, text: "There are no airports for fixed-wing aircraft within Andorra's borders but there are heliports in La Massana, Arinsal and Escaldes-Engordany with commercial helicopter services. Nearby airports located in Spain and France provide access to international flights for the principality. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old.", plen: "401", markedText: "There are no airports for fixed-wing aircraft within Andorra's borders but there are heliports in La Massana, Arinsal and Escaldes-Engordany with commercial helicopter services. Nearby airports located in Spain and France provide access to international flights for the principality. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 6, text: "There are hourly bus services from both Barcelona and Toulouse airports to Andorra. Ticket price is 10 euro per person. The nearest railway station is L'Hospitalet-pres-l'Andorre 10 km east of Andorra. There are also direct Intercites de Nuit trains between L'Hospitalet-pres-l'Andorre and Paris on certain dates. Train ticket is 20 euro per person.", plen: "349", markedText: "There are hourly bus services from both Barcelona and Toulouse airports to Andorra. Ticket price is 10 euro per person. The nearest railway station is L'Hospitalet-pres-l'Andorre 10 km east of Andorra. There are also direct Intercites de Nuit trains between L'Hospitalet-pres-l'Andorre and Paris on certain dates. Train ticket is 20 euro per person."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 7, text: "Allot one day for exploring Andorra’s quaint capital city, Andorra La Vella. With its charmed cobblestone streets and small stone houses, it is like being transported back in time to the 13th century. Constructed in 1580 as a home for a wealthy family, Casa de la Vall has served as Andorra's parliament building since 1702. It is open for public every weekend from 10:00 am to 2:00 pm. There are free guided tours in several languages, including English. Mentioned in documents from the 9th century, the pre-Romanesque form of the Church of Santa Coloma is Andorra's oldest. It is open for public for free from Monday to Sunday from 9:00am to 2:00pm.", plen: "651", markedText: "Allot one day for exploring Andorra’s quaint capital city, Andorra La Vella. With its charmed cobblestone streets and small stone houses, it is like being transported back in time to the 13th century. Constructed in 1580 as a home for a wealthy family, Casa de la Vall has served as Andorra's parliament building since 1702. It is open for public every weekend from 10:00 am to 2:00 pm. There are free guided tours in several languages, including English. Mentioned in documents from the 9th century, the pre-Romanesque form of the Church of Santa Coloma is Andorra's oldest. It is open for public for free from Monday to Sunday from 9:00am to 2:00pm."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 8, text: "The Principality of Andorra has a complete hotel infrastructure, with more than 250 hotels all over the country. All the options are excellent value for money. Every hotel is well-prepared to welcome skiers, providing all the services and amenities that they may need.", plen: "268", markedText: "The Principality of Andorra has a complete hotel infrastructure, with more than 250 hotels all over the country. All the options are excellent value for money. Every hotel is well-prepared to welcome skiers, providing all the services and amenities that they may need."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 9, text: "The Hotel Roc Blanc is the flagship of the Andorran hotel group and was the first to offer the benefits of spa waters in the principality - 995 euro for 14 nights (plus 300 euro for meals). A Casa Canut Gastronomic Hotel is a reference in the country cuisine - 1200 euro for 14 nights (breakfast lunch and dinner included). The Tulip Inn Andorra Delfos Hotel lies at the heart of Escaldes-Engordany - 1020 euro for 14 nights (meals are included).", plen: "446", markedText: "The Hotel Roc Blanc is the flagship of the Andorran hotel group and was the first to offer the benefits of spa waters in the principality - 995 euro for 14 nights (plus 300 euro for meals). A Casa Canut Gastronomic Hotel is a reference in the country cuisine - 1200 euro for 14 nights (breakfast lunch and dinner included). The Tulip Inn Andorra Delfos Hotel lies at the heart of Escaldes-Engordany - 1020 euro for 14 nights (meals are included)."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 10, text: "For skiers wishing to discover the whole ski domain of the Principality, Ski Andorra launches a 5 day ski pass. With this single pass you will enjoy all the ski runs Andorra has to offer. SINGLE PRICE: 200 €. With the season ski pass you will have the opportunity to ski as often as you like on all the ski runs of the Principality. Adults 727 €. Juniors (from 12 to 17 years old) 594 €. Children 518 €.", plen: "403", markedText: "For skiers wishing to discover the whole ski domain of the Principality, Ski Andorra launches a 5 day ski pass. With this single pass you will enjoy all the ski runs Andorra has to offer. SINGLE PRICE: 200 €. With the season ski pass you will have the opportunity to ski as often as you like on all the ski runs of the Principality. Adults 727 €. Juniors (from 12 to 17 years old) 594 €. Children 518 €."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 11, text: "Do not forget that you can win a 10-day ski pass at the Ski Andorra stand during la Fira d’Andorra la Vella. Here are the lucky winners of 2016: David Puy Baron, Jesus Marlet Zanini, Carolina Serra Areny, Gabriela Gacitúa Munoz, Mark Cuthbert.", plen: "243", markedText: "Do not forget that you can win a 10-day ski pass at the Ski Andorra stand during la Fira d’Andorra la Vella. Here are the lucky winners of 2016: David Puy Baron, Jesus Marlet Zanini, Carolina Serra Areny, Gabriela Gacitúa Munoz, Mark Cuthbert."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 12, text: "The Grandvalira Encamp sector will be receiving the Freeride Junior World Championships for the third consecutive year in Europe, with the best male and female riders from around the world. Place and dates: Pic Alt de Cubil, Grau Roig, from 3 to 9 February 2017. Attendance is free.", plen: "282", markedText: "The Grandvalira Encamp sector will be receiving the Freeride Junior World Championships for the third consecutive year in Europe, with the best male and female riders from around the world. Place and dates: Pic Alt de Cubil, Grau Roig, from 3 to 9 February 2017. Attendance is free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 13, text: "The Vallnord Arcalis resort will once more be one of the five exclusive world stages of the prestigious Swatch Freeride World Tour. Place and dates: Arcalis resort Ordino, 5 January 2017. All are welcome. Attendance is free.", plen: "224", markedText: "The Vallnord Arcalis resort will once more be one of the five exclusive world stages of the prestigious Swatch Freeride World Tour. Place and dates: Arcalis resort Ordino, 5 January 2017. All are welcome. Attendance is free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 14, text: "The Soldeu ski school office can be found at the top of the Soldeu gondola, just over to the right as you step onto the slopes. Full day price for children up to 14 years: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro.", plen: "330", markedText: "The Soldeu ski school office can be found at the top of the Soldeu gondola, just over to the right as you step onto the slopes. Full day price for children up to 14 years: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 15, text: "Ski Rental. Ski+boots for kids up to 14 years: 7 euro per day. Ski+boots for adults: 15 euro per day.", plen: "101", markedText: "Ski Rental. Ski+boots for kids up to 14 years: 7 euro per day. Ski+boots for adults: 15 euro per day."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 16, text: "Andorra is famous for the practice of Winter Sports. The Andorran alpine skier Àlex Antor represented his country at the Winter Olympics in 2002 and 2006. Ariadna Tudel Cuberes and Sophie Dusautoir Bertrand earned the bronze medal in the women's team competition at the 2009 European Championship of Ski Mountaineering. Joan Verdu Sanchez earned a bronze medal in Alpine Skiing at the 2012 Winter Youth Olympics. In 2015, Marc Oliveras earned a silver medal in Alpine Skiing at the 2015 Winter Universiade, while Carmina Pallas earned a silver and a bronze medal in the same competition. Other famous athletes are Hocine Haciane, Alex Antor, Eric Bataille, Melissandre Fuentes. Hocine Haciane was the flag bearer at the 2004 Olympic Games in Athens, Greece, and in Beijing in 2008.", plen: "781", markedText: "Andorra is famous for the practice of Winter Sports. The Andorran alpine skier Àlex Antor represented his country at the Winter Olympics in 2002 and 2006. Ariadna Tudel Cuberes and Sophie Dusautoir Bertrand earned the bronze medal in the women's team competition at the 2009 European Championship of Ski Mountaineering. Joan Verdu Sanchez earned a bronze medal in Alpine Skiing at the 2012 Winter Youth Olympics. In 2015, Marc Oliveras earned a silver medal in Alpine Skiing at the 2015 Winter Universiade, while Carmina Pallas earned a silver and a bronze medal in the same competition. Other famous athletes are Hocine Haciane, Alex Antor, Eric Bataille, Melissandre Fuentes. Hocine Haciane was the flag bearer at the 2004 Olympic Games in Athens, Greece, and in Beijing in 2008."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 17, text: "Christmas wouldn’t be complete without a visit from Saint Nicholas and he makes time during his busy schedule for a stop here. This Christmas Eve (December 24th, 2016) at 7 p.m. he is expected to reach the La Llacuna Cultural Centre to greet the children and hear their requests. The event is free.", plen: "298", markedText: "Christmas wouldn’t be complete without a visit from Saint Nicholas and he makes time during his busy schedule for a stop here. This Christmas Eve (December 24th, 2016) at 7 p.m. he is expected to reach the La Llacuna Cultural Centre to greet the children and hear their requests. The event is free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 18, text: "The Andorra Street Sax Fest is one of the most important European meetings of this specialty. In its 5th edition, you can enjoy an extensive program of concerts, master classes and workshops. The festival will be held from 14 to 28 of December 2016. It is free for all visitors.", plen: "278", markedText: "The Andorra Street Sax Fest is one of the most important European meetings of this specialty. In its 5th edition, you can enjoy an extensive program of concerts, master classes and workshops. The festival will be held from 14 to 28 of December 2016. It is free for all visitors."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 19, text: "Caldea, the largest spa in the South of Europe, now completes its offer with Inuu, a centre providing a unique experience consisting of individual care and tailor-made treatment. Caldea opens every day from 10 a.m. to 10 p.m. (on Saturdays until midnight), with the Mondaigua light and music show every day at 9:40 p.m. Prices per day: EUR 15,00.", plen: "346", markedText: "Caldea, the largest spa in the South of Europe, now completes its offer with Inuu, a centre providing a unique experience consisting of individual care and tailor-made treatment. Caldea opens every day from 10 a.m. to 10 p.m. (on Saturdays until midnight), with the Mondaigua light and music show every day at 9:40 p.m. Prices per day: EUR 15,00."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 20, text: "A trip to the National Automobile Museum will have the classier redheads wishing they could take one of the 80 vintage cars or numerous antique motorcycles for a spin through the Pyrenees. The museum is open for free every weekend from 9:00 am to 2:00 pm.", plen: "255", markedText: "A trip to the National Automobile Museum will have the classier redheads wishing they could take one of the 80 vintage cars or numerous antique motorcycles for a spin through the Pyrenees. The museum is open for free every weekend from 9:00 am to 2:00 pm."});
          mainText.insert({experimentType: "1", groupId: "", name: "Andorra", pid: 21, text: "Andorra is home to folk dances like the contrapàs and marratxa, which survive in Sant Julià de Lòria especially. Famous American folk artist Malvina Reynolds, intrigued by its defense budget of $4.90, wrote a song called Andorra. A prominent activist and a singer Pete Seeger added verses, and sang Andorra on his 1962 album The Bitter and the Sweet.", plen: "350", markedText: "Andorra is home to folk dances like the contrapàs and marratxa, which survive in Sant Julià de Lòria especially. Famous American folk artist Malvina Reynolds, intrigued by its defense budget of $4.90, wrote a song called Andorra. A prominent activist and a singer Pete Seeger added verses, and sang Andorra on his 1962 album The Bitter and the Sweet."});

          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 1, text: "Kitzbuhel is a small medieval town situated along the river Kitzbuhler Ache in Tyrol, Austria. You can learn more about history of Kitzbuhel by visiting the Municipal Museum of Kitzbuehel. It is free and open from Monday to Sunday from 9:00 am to 5:00 pm.", plen: "255", markedText: "Kitzbuhel is a small medieval town situated along the river Kitzbuhler Ache in Tyrol, Austria. You can learn more about history of Kitzbuhel by visiting the Municipal Museum of Kitzbuehel. It is free and open from Monday to Sunday from 9:00 am to 5:00 pm."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 2, text: "You can enjoy the guided walking tours for free. Our guide Engelbert will take you to the most marvellous places in the Kitzbühel Alps. When: from Monday to Friday. Meetingplace: 09.45 a.m Kitzbühel Tourismus.", plen: "209", markedText: "You can enjoy the guided walking tours for free. Our guide Engelbert will take you to the most marvellous places in the Kitzbühel Alps. When: from Monday to Friday. Meetingplace: 09.45 a.m Kitzbühel Tourismus."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 3, text: "At the north of Kitzbuhel there is the Gothic St. Catherine's Church built in the 14th century and now a war memorial. Interior highlights include a box window on the south wall, a carved figure of Our Lady from the 15th century, and a winged altarpiece from 1520. It is open for tourists every Sunday from 10:00 am to 1:00 pm. The entrance is free.", plen: "349", markedText: "At the north of Kitzbuhel there is the Gothic St. Catherine's Church built in the 14th century and now a war memorial. Interior highlights include a box window on the south wall, a carved figure of Our Lady from the 15th century, and a winged altarpiece from 1520. It is open for tourists every Sunday from 10:00 am to 1:00 pm. The entrance is free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 4, text: "There are a number of airlines operating direct flights to Munich. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old. There are hourly bus services from Munich airport to Kitzbuhel (10 euro per person). Discount option for Lufthansa travelers. You will receive free shuttle services. Simply show your Lufthansa boarding pass.", plen: "392", markedText: "There are a number of airlines operating direct flights to Munich. With early booking the round trip ticket costs about 500 euro for an adult and 400 euro of a child up to 5 years old. There are hourly bus services from Munich airport to Kitzbuhel (10 euro per person). Discount option for Lufthansa travelers. You will receive free shuttle services. Simply show your Lufthansa boarding pass."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 5, text: "Kitzbuhel is one of Austria's best-known and fanciest winter sports resorts. In the 1950s, local legends like Ernst Hinterseer, Hias Leitner, Anderl Molterer, Christian Pravda, Fritz Huber Jr. and Toni Sailer wrote skiing history. Now there is a new generation earning the title of Kitzbuhel legends: Rosi Schipflinger, Axel Naglich, Kaspar Frauenschuh and David Kreiner.", plen: "371", markedText: "Kitzbuhel is one of Austria's best-known and fanciest winter sports resorts. In the 1950s, local legends like Ernst Hinterseer, Hias Leitner, Anderl Molterer, Christian Pravda, Fritz Huber Jr. and Toni Sailer wrote skiing history. Now there is a new generation earning the title of Kitzbuhel legends: Rosi Schipflinger, Axel Naglich, Kaspar Frauenschuh and David Kreiner."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 6, text: "EXPERIENCE A WHOLE DAY OF SKIING FUN. One day ticket: Adults - € 50, Youth - € 30, Children - € 20. We offer our holiday guests multi-day tickets for the exact length of their holiday. 10-day ticket: Adults - € 400, Children (up to 10 years old) - € 200.", plen: "254", markedText: "EXPERIENCE A WHOLE DAY OF SKIING FUN. One day ticket: Adults - € 50, Youth - € 30, Children - € 20. We offer our holiday guests multi-day tickets for the exact length of their holiday. 10-day ticket: Adults - € 400, Children (up to 10 years old) - € 200."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 7, text: "From 24 November to 25 December, the town centre will be transformed into a festive scene. Don t miss the grand opening in the scenic town centre on 24 November at 6.00 p.m. We recommend getting there on time, as this is certainly one of the most traditional and beautiful Christmas Markets for miles around. Every day between 6.00 p.m. and 7.00 p.m., local musicians and choirs will bring the entire market area to life with the sound of music. Head to the Kitzbuhel Museum, where from 3.00 p.m. on Christmas Eve a free Christmas reading session will be held.", plen: "560", markedText: "From 24 November to 25 December, the town centre will be transformed into a festive scene. Don t miss the grand opening in the scenic town centre on 24 November at 6.00 p.m. We recommend getting there on time, as this is certainly one of the most traditional and beautiful Christmas Markets for miles around. Every day between 6.00 p.m. and 7.00 p.m., local musicians and choirs will bring the entire market area to life with the sound of music. Head to the Kitzbuhel Museum, where from 3.00 p.m. on Christmas Eve a free Christmas reading session will be held."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 8, text: "The big highlight in Kitzbuehels year always takes place on 1st January. The Rasmusleiten brings tens of thousands of spectators to an event in extra class: Torch skiing the ski schools 'Red Devils' and 'Element3', fire jumping, music, and of course the spectacular fireworks of the world famous Pyro professionals Armin Lukasser. Beginning: 5:30 pm. Free admission!", plen: "366", markedText: "The big highlight in Kitzbuehels year always takes place on 1st January. The Rasmusleiten brings tens of thousands of spectators to an event in extra class: Torch skiing the ski schools 'Red Devils' and 'Element3', fire jumping, music, and of course the spectacular fireworks of the world famous Pyro professionals Armin Lukasser. Beginning: 5:30 pm. Free admission!"});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 9, text: "Kitzbuehel welcomes the new year with a class winter sport. For the 15th time the Snow Polo World Cup will be held on the outskirts of Kitzbuehel from 12 to 15 January, 2017. From 17 to 22 January 2017, the entire ski world gets Hahnenkamm fever. The best ski athletes in the world will gather in Kitzbuehel to celebrate the highlight of the World Cup calendar. Free admission for both events!", plen: "393", markedText: "Kitzbuehel welcomes the new year with a class winter sport. For the 15th time the Snow Polo World Cup will be held on the outskirts of Kitzbuehel from 12 to 15 January, 2017. From 17 to 22 January 2017, the entire ski world gets Hahnenkamm fever. The best ski athletes in the world will gather in Kitzbuehel to celebrate the highlight of the World Cup calendar. Free admission for both events!"});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 10, text: "In Wildpark Aurach of Kitzbuehel approximately 200 animals live at 1,100 m above sea level in Tyrol's largest outdoor enclosure. On the tour you will encounter deer, lynx, wild boar, yak, zebu, marmots, wild ducks, pheasants, peacocks, ibex etc. Wildlife feeding is daily at 2:30 pm. Entrance is EUR 8.00.", plen: "305", markedText: "In Wildpark Aurach of Kitzbuehel approximately 200 animals live at 1,100 m above sea level in Tyrol's largest outdoor enclosure. On the tour you will encounter deer, lynx, wild boar, yak, zebu, marmots, wild ducks, pheasants, peacocks, ibex etc. Wildlife feeding is daily at 2:30 pm. Entrance is EUR 8.00."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 11, text: "The connection between Kitzbuehel and skiing is legendary. In March 1893, Franz Reisch managed to ski down from the Kitzbueheler Horn, making it the first Alpine ski run in Austria. Reisch had read the sensational book; “On snowshoes through Greenland” by Norwegian polar explorer, Fridtjof Nansen in which the author expresses enthusiasm for Skisport. This book may well have been the trigger that began the unprecedented development of a sleepy mountain town into a place that is the heart and soul of skiing.", plen: "511", markedText: "The connection between Kitzbuehel and skiing is legendary. In March 1893, Franz Reisch managed to ski down from the Kitzbueheler Horn, making it the first Alpine ski run in Austria. Reisch had read the sensational book; “On snowshoes through Greenland” by Norwegian polar explorer, Fridtjof Nansen in which the author expresses enthusiasm for Skisport. This book may well have been the trigger that began the unprecedented development of a sleepy mountain town into a place that is the heart and soul of skiing."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 12, text: "In 1926 the Kitzbuehel Ski School was founded and it became world famous under the leadership of Karl Koller. He also developed “Ski Peadagoge” and became great friends with the 'Ski-Pope' Stefan Kruckenhauser who revolutionized ski teaching. He introduced short ski teaching methods without ‘Stemmbewegungen’ (knee turns), published ski videos and textbooks and changed many other things.", plen: "389", markedText: "In 1926 the Kitzbuehel Ski School was founded and it became world famous under the leadership of Karl Koller. He also developed “Ski Peadagoge” and became great friends with the 'Ski-Pope' Stefan Kruckenhauser who revolutionized ski teaching. He introduced short ski teaching methods without ‘Stemmbewegungen’ (knee turns), published ski videos and textbooks and changed many other things."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 13, text: "Full day price for children: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro.", plen: "187", markedText: "Full day price for children: 1 day € 40, 2 days € 70. Full day price for adults: 1 day € 50, 2 days € 90. The school offers private lessons for a group (maximum 4 people): 1 day 200 euro."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 14, text: "Ski Rental. Ski+boots for kids up to 14 years: 10 euro per day. Ski+boots for adults: 20 euro per day. ATTENTION: the 7th day rental is FREE for all items! During your lessons at the school, you can rent the ski equipment for free.", plen: "231", markedText: "Ski Rental. Ski+boots for kids up to 14 years: 10 euro per day. Ski+boots for adults: 20 euro per day. ATTENTION: the 7th day rental is FREE for all items! During your lessons at the school, you can rent the ski equipment for free."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 15, text: "The legendary “Ski Wonder Team” plays a legendary role in the history of Kitzbuehel. For ten years, the best skiers in the world all come from Kitzbuehel. Together this miracle team won 27 medals in the Winter Olympic Games and World Skiing Championships. Toni Sailer achieved so much and remarkably was only 22 years old when he ended his professional skiing career. Once, on a visit to Tokyo, he was welcomed by Crown Prince Akihito and 250,000 delirious fans at the airport.", plen: "477", markedText: "The legendary “Ski Wonder Team” plays a legendary role in the history of Kitzbuehel. For ten years, the best skiers in the world all come from Kitzbuehel. Together this miracle team won 27 medals in the Winter Olympic Games and World Skiing Championships. Toni Sailer achieved so much and remarkably was only 22 years old when he ended his professional skiing career. Once, on a visit to Tokyo, he was welcomed by Crown Prince Akihito and 250,000 delirious fans at the airport."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 16, text: "In the last few years, Axel Naglich and Peter Ressman from Kitzbuehel have climbed up the highest mountains and become the first people to ski some of most extreme downhill routes in the world. Axel Naglich loves a challenge. He has three wins at the 24- hour-race in Aspen, 11 years experience as a forerunner on the Streif at the Hahnenkamm downhill race and became the first man to ski the longest downhill in the world at Mount St.Elias in Alaska, 5489 metres above sea level.", plen: "480", markedText: "In the last few years, Axel Naglich and Peter Ressman from Kitzbuehel have climbed up the highest mountains and become the first people to ski some of most extreme downhill routes in the world. Axel Naglich loves a challenge. He has three wins at the 24- hour-race in Aspen, 11 years experience as a forerunner on the Streif at the Hahnenkamm downhill race and became the first man to ski the longest downhill in the world at Mount St.Elias in Alaska, 5489 metres above sea level."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 17, text: "You can find out more about history of winter sports at Kitzbühel Town Museum. In 2007 the Kitzbühel Town Museum was awarded with the Austrian Museum Quality Seal. Opening hours: all-the-year from Tuesday to Sunday from 2 to 6 pm. It is free for all visitors.", plen: "259", markedText: "You can find out more about history of winter sports at Kitzbühel Town Museum. In 2007 the Kitzbühel Town Museum was awarded with the Austrian Museum Quality Seal. Opening hours: all-the-year from Tuesday to Sunday from 2 to 6 pm. It is free for all visitors."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 18, text: "At the northern end of Old Town Kitzbühel stands picturesque St. Andreas Parish Church. Built between 1435 and 1506 and later remodeled in Baroque style, this massive building with its low tower and dome is equally attractive inside, boasting beautiful stucco work, ceiling paintings, and 15th-century frescos. It is open for public every Sunday from 10:00 am to 1:00 pm. There are free guided tours in several languages, including English.", plen: "440", markedText: "At the northern end of Old Town Kitzbühel stands picturesque St. Andreas Parish Church. Built between 1435 and 1506 and later remodeled in Baroque style, this massive building with its low tower and dome is equally attractive inside, boasting beautiful stucco work, ceiling paintings, and 15th-century frescos. It is open for public every Sunday from 10:00 am to 1:00 pm. There are free guided tours in several languages, including English."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 19, text: "There is a renewed interest in the traditional winter sport of ice skating. The new Ice Rink in Kitzbuehel is open 24/7 and has an area of 1,800 square metres of ice designed to please the present and future stars of the ice. Skates are available to rent in house. Entry prices: EUR 5. Skate hire per person EUR 5.", plen: "314", markedText: "There is a renewed interest in the traditional winter sport of ice skating. The new Ice Rink in Kitzbuehel is open 24/7 and has an area of 1,800 square metres of ice designed to please the present and future stars of the ice. Skates are available to rent in house. Entry prices: EUR 5. Skate hire per person EUR 5."});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 20, text: "The best KitzSki offers apartments for 2 adults and 1 child from 23th of December to 6th of January:", plen: "100", markedText: "The best KitzSki offers apartments for 2 adults and 1 child from 23th of December to 6th of January:"});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 21, text: "HAUS AM LIFT – 1200 euro (breakfast lunch and dinner included)", plen: "62", markedText: "HAUS AM LIFT – 1200 euro (breakfast lunch and dinner included)"});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 22, text: "HAUS MARIA - 1000 euro, (plus 300 euro for meals)", plen: "49", markedText: "HAUS MARIA - 1000 euro, (plus 300 euro for meals)"});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 23, text: "APPARTEMENT ACHENBLICK (meals are included) - 1500 euro", plen: "55", markedText: "APPARTEMENT ACHENBLICK (meals are included) - 1500 euro"});
          mainText.insert({experimentType: "1", groupId: "", name: "Kitzbuel", pid: 24, text: "Treat yourself to sometime in the pool with the wellness and health centre in the heart of Kitzbuehel! Relax and unwind in the sauna and be pampered from head to toe in the Aquarena spa. It is open daily from 11:00 am till 11:00 pm. Prices per day: EUR 15.", plen: "256", markedText: "Treat yourself to sometime in the pool with the wellness and health centre in the heart of Kitzbuehel! Relax and unwind in the sauna and be pampered from head to toe in the Aquarena spa. It is open daily from 11:00 am till 11:00 pm. Prices per day: EUR 15."});
      }

      var batch = TurkServer.Batch.getBatchByName("main");
      console.log('----------------Meteor.startup, batch:', batch);
      if (batch != null) {
          batch.setAssigner(new TurkServer.Assigners.SimpleAssigner);
          console.log('batch assigned');
      }
      console.log('----------------------Meteor.startup done');
});

function getDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return {
        msec: currentdate,
        dateStr: datetime
    };
};

Meteor.methods({
    sendAnswerN: function(answer, n, clientDT) {
        console.log('------------------sendAnswerN ', n)
        var group = TurkServer.Instance.currentInstance();
        console.log('group', group);
        if (group != null) {
            var asst = TurkServer.Assignment.currentAssignment();
            var exp = UHexperiments.findOne({groupId: group.groupId});
            var dateTime = getDateTime();
            if (n == 1)
                UHexperiments.update(exp._id, {$set: {asstId: asst.asstId, batchId: asst.userId, hitId: asst.hitId, assignmentId: asst.assignmentId, workerId: asst.workerId, userId: asst.userId, answer: answer, answer1MsecSrv: dateTime.msec, answer1MsecCl: clientDT, answer1: answer}});
            else if (n == 2)
                UHexperiments.update(exp._id, {$set: {answer2: answer, answer2MsecSrv: dateTime.msec, answer2MsecCl: clientDT,}});
            else if (n == 3)
                UHexperiments.update(exp._id, {$set: {asstId: asst.asstId, batchId: asst.userId, hitId: asst.hitId, assignmentId: asst.assignmentId, workerId: asst.workerId, userId: asst.userId, answer3: answer, answer3MsecSrv: dateTime.msec, answer3MsecCl: clientDT,}});
            console.log(dateTime);
        }
    },
    sendAnswer: function(answer) {
        console.log('------------------sendAnswer')
        var group = TurkServer.Instance.currentInstance();
        console.log('group', group);
        if (group != null) {
            var asst = TurkServer.Assignment.currentAssignment();
            var exp = UHexperiments.findOne({groupId: group.groupId});
            var dateTime = getDateTime();
            UHexperiments.update(exp._id, {$set: {asstId: asst.asstId, batchId: asst.userId, hitId: asst.hitId, assignmentId: asst.assignmentId, workerId: asst.workerId, userId: asst.userId, submited: true, answer: answer, currMsec: dateTime.msec, currDateStr: dateTime.dateStr}});
            console.log(dateTime);
        }
    },
    insertMarked: function(pId, startPos, endPos) {
        console.log('------------------insertMarked');
        var group = TurkServer.Instance.currentInstance();
        console.log(pId, ' ', startPos, ' ', endPos);
        var mr = marked.insert({groupId: group.groupId, pId: pId, startPos: startPos, endPos: endPos});
        console.log(mr);
    },
    updateMainText: function(_id, markedText) {
        console.log('------------------updateMainText');
        //var group = TurkServer.Instance.currentInstance();
        mainText.update(_id, {$set: {markedText: markedText}});
    },
    goToBudgetExitSurvey: function() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!goToBudgetExitSurvey here');
        console.log(TurkServer.Instance.currentInstance());
        console.log(TurkServer.Assignment.currentAssignment());
        /*{ groupId: 'vsQ5Hge3qSK4n3jhv' }
         { asstId: 'AMuwNex2Neb5s79iS',
         batchId: '97zJ2zxLpfLSQfes3',
         hitId: 'gnwm6dh8nxTScEtv2_HIT',
         assignmentId: 'gnwm6dh8nxTScEtv2_Asst',
         workerId: 'gnwm6dh8nxTScEtv2_Worker',
         userId: 'f8B5A9xhqmC3BsCvA' }

         //on Client Meteor.userId() dives _id: 'f8B5A9xhqmC3BsCvA'
        */

        //console.log(TurkServer.Instance.userId);
        //console.log(TurkServer.Instance.currentInstance());
        //console.log(TurkServer.Instance.users());
        //console.log(TurkServer.Instance.userId);
        return true;
        /*inst = TurkServer.Instance.currentInstance();
        users = TurkServer.Instance.users();
        user = TurkServer.Instance.userId;
        return [inst, users, user];*/
    },
    goToExitSurvey: function() {
        console.log('--------------------------goToExitSurvey here');
        var exp = TurkServer.Instance.currentInstance();
        var expUH = UHexperiments.findOne({groupId: exp.groupId});
        if (expUH) {
            if (expUH.goBefore != "error") {
                var tab3AB = exp3AB.findOne({idA: expUH.goBefore});
                console.log('--------------------------tab3AB._id: ', tab3AB._id);
                exp3AB.update(tab3AB._id, {$set: {idB: tab3AB.idB.concat(exp.groupId, " ")}});
            }
            exp3Bhistory.insert({idA: expUH.goBefore, idB: exp.groupId});
        }
        console.log(exp);
        if (exp != null) {
            console.log('exp destroyed');
            exp.teardown();
        }
    }
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

TurkServer.initialize(function() {
    console.log('------------------TurkServer.initialize');
    var randExp = "3B";
    //var randResort = Random.choice(["Kitzbuel", "Andorra", "Gastein"]);
    //var randQuest = Random.choice(["Budget", "Famous", "Events"]);
    var randQuest = "Events";

    /*var ec = randHistory.find({variable: "question", value: "Events"}).count();
    var bc = randHistory.find({variable: "question", value: "Budget"}).count();
    console.log("bc, ec: ", bc, ec);
    if (bc - ec > 3)
        randQuest = "Events";
    else if (ec - bc > 3)
        randQuest = "Budget";
    randHistory.insert({variable: "question", value: randQuest});*/

    if (randExp == "2" || randExp == "3A") {
        var resorts = ["Kitzbuel", "Andorra", "Gastein"];
        shuffle(resorts);

        var group = TurkServer.Instance.currentInstance();
        var newExp = UHexperiments.insert({
            groupId: group.groupId,
            experimentType: randExp,
            resort: resorts[0],
            question: randQuest,
            //submited: false,
            goBefore: "",
            resort1: resorts[0],
            resort2: resorts[1],
            resort3: resorts[2],
            quizN: 2,
            testN: 1,
            testChanged: 1,
            testUpproved: false
        });
        console.log("newExp: ", newExp);

        mainText.find({groupId: "", experimentType: "1"}).forEach(function (text) {
            text.experimentType = randExp;
            text.groupId = group.groupId;
            //text.name = resorts[0];
            delete text["_id"];
            mainText.insert(text);
        });
        testText.find({groupId: "", experimentType: "1", name: randQuest}).forEach(function (text) {
            text.experimentType = randExp;
            text.groupId = group.groupId;
            delete text["_id"];
            testText.insert(text);
        });
    }
    else if (randExp == "3B") {
        var expTab = exp3AB.findOne({idRandom: Math.floor(Math.random() * 65) + 624});
        for (var i = 0; i < 25; i++) {
            if (expTab && expTab.idB == "")
                break;
            expTab = exp3AB.findOne({idRandom: Math.floor(Math.random() * 65) + 624});
        }
        for (var i = 624; i <= 688; i++) {
            if (expTab && expTab.idB == "")
                break;
            expTab = exp3AB.findOne({idRandom: i});
        }
        if (expTab && expTab.idB != "")
            expTab = exp3AB.findOne({idRandom: Math.floor(Math.random() * 65) + 624});

//var expTab = exp3AB.findOne({idRandom: 210});

        /*if (randQuest == "Events")
            var expTab = exp3AB.findOne({idRandom: 88});
        else
            var expTab = exp3AB.findOne({idRandom: 89});*/
        //var resorts = ["Kitzbuel", "Andorra", "Gastein"];
        //shuffle(resorts);

        if (!expTab) {
            var resorts = ["Kitzbuel", "Andorra", "Gastein"];
            shuffle(resorts);
            var group = TurkServer.Instance.currentInstance();
            var newExp = UHexperiments.insert({
                groupId: group.groupId,
                experimentType: randExp,
                resort: resorts[2],
                question: randQuest,
                goBefore: "error",
                resort1: resorts[0],
                resort2: resorts[1],
                resort3: resorts[2],
                quizN: 2,
                testN: 1,
                testChanged: 1,
                testUpproved: false
            });
            mainText.find({groupId: "", experimentType: "1"}).forEach(function (text) {
                text.experimentType = randExp;
                text.groupId = group.groupId;
                delete text["_id"];
                mainText.insert(text);
            });
        }
        else {
            console.log('------------------------expTab.idA= ', expTab.idA);
            var exp = UHexperiments.findOne({groupId: expTab.idA});
            console.log('------------------------looking for 3A = ', exp);
            if (!exp) {
                var resorts = ["Kitzbuel", "Andorra", "Gastein"];
                shuffle(resorts);
                var group = TurkServer.Instance.currentInstance();
                var newExp = UHexperiments.insert({
                    groupId: group.groupId,
                    experimentType: randExp,
                    resort: resorts[2],
                    question: randQuest,
                    goBefore: "error",
                    resort1: resorts[0],
                    resort2: resorts[1],
                    resort3: resorts[2],
                    quizN: 2,
                    testN: 1,
                    testChanged: 1,
                    testUpproved: false
                });
                mainText.find({groupId: "", experimentType: "1"}).forEach(function (text) {
                    text.experimentType = randExp;
                    text.groupId = group.groupId;
                    delete text["_id"];
                    mainText.insert(text);
                });
            }
            else {
                console.log('--------------------------------------we entered');
                randQuest = exp.question;
                var group = TurkServer.Instance.currentInstance();
                var newExp = UHexperiments.insert({
                    groupId: group.groupId,
                    experimentType: randExp,
                    resort: exp.resort3,
                    question: randQuest,
                    goBefore: expTab.idA,
                    resort1: exp.resort1,
                    resort2: exp.resort2,
                    resort3: exp.resort3,
                    quizN: 2,
                    testN: 1,
                    testChanged: 1,
                    testUpproved: false
                });
                console.log('------------------------mainText.count: ', mainText.find({groupId: expTab.idA/*, experimentType: "3A"*/}).count());
                mainText.find({groupId: expTab.idA/*, experimentType: "3A"*/}).forEach(function (text) {
                    text.experimentType = randExp;
                    text.groupId = group.groupId;
                    delete text["_id"];
                    mainText.insert(text);
                });
                console.log('------------------------marked.count: ', marked.find({groupId: expTab.idA}).count());
                marked.find({groupId: expTab.idA}).forEach(function (text) {
                    text.groupId = group.groupId;
                    delete text["_id"];
                    marked.insert(text);
                });
            }
        }
        console.log("------------------------newExp: ", newExp);
        testText.find({groupId: "", experimentType: "1", name: randQuest}).forEach(function (text) {
            text.experimentType = randExp;
            text.groupId = group.groupId;
            delete text["_id"];
            testText.insert(text);
        });
        if (randQuest == "Budget") {
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 129, endPos: 186});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 299, endPos: 330});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 506, endPos: 576});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 678, endPos: 701});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 773, endPos: 901});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 1030, endPos: 1132});

            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 74, endPos: 111});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 180, endPos: 285});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 683, endPos: 813});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 907, endPos: 969});

            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 135, endPos: 206});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 379, endPos: 397});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 490, endPos: 576});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 641, endPos: 770});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 1141, endPos: 1312});
        }
        else if (randQuest == "Events") {
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 467, endPos: 695});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 760, endPos: 1016});

            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 109, endPos: 135});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 331, endPos: 369});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 620, endPos: 641});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 663, endPos: 762});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 870, endPos: 883});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 1137, endPos: 1205});

            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 116, endPos: 183});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 328, endPos: 393});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 543, endPos: 602});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 715, endPos: 774});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 927, endPos: 984});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 1018, endPos: 1077});
        }
        else if (randQuest == "Famous") {
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 167, endPos: 187});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 264, endPos: 285});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 572, endPos: 600});
            testMarked.insert({testN: 1, groupId: group.groupId, pId: 0, startPos: 712, endPos: 749});

            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 0, endPos: 12});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 214, endPos: 229});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 468, endPos: 486});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 731, endPos: 745});
            testMarked.insert({testN: 2, groupId: group.groupId, pId: 0, startPos: 983, endPos: 992});

            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 80, endPos: 99});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 150, endPos: 198});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 228, endPos: 243});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 332, endPos: 566});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 591, endPos: 603});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 712, endPos: 720});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 773, endPos: 806});
            testMarked.insert({testN: 3, groupId: group.groupId, pId: 0, startPos: 907, endPos: 923});
        }
    }
});