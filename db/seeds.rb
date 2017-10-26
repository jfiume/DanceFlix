# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create!(username: "WillDavis@willdemos.net", password: "password")
super_user = User.create(username: "Superman@batmansucks.org", password: "password")
bat_user = User.create(username: "Batman@supermansucks.net", password: "password")


Video.destroy_all
video1 = Video.create(
  video_url: "https://www.youtube.com/embed/dk-nWE9yeG8?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_thumb,h_160,w_280/v1501040744/maxresdefault_u1awe3.jpg",
  description: "A top ballroom dancer pairs with a plain, left-footed local girl when his maverick style earns him the disdain of his more conventionally-minded colleagues. Together, the team gives it their all and makes dreams of the National Championship title come true.",
  title: "Strictly Ballroom - Final Competition",
  genre: "Paso Doble",
  year: 1993
)

video2 = Video.create(
  video_url: "https://www.youtube.com/embed/16EuniBuiz0?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1505098463/heidi-groskreutz-and-benji-schwimmer-of-so-you-think-you-can-dance.jpg",
  description: "They do a human cartwheel!",
  title: "West Cost Swing for the win",
  genre: "West Cost Swing",
  year: 2012
)

video3 = Video.create(
video_url: "https://www.youtube.com/embed/Cj3AV92fJ90?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1504227601/jabbawockeez_iejdcf.png",
description: "JABBAWOCKEEZ perform at the 2017 NBA Finals Championship Game",
title: "JABBAWOCKEEZ at the NBA Finals 2017",
genre: "Breakance",
year: 2017
)

video4 = Video.create(
video_url: "https://www.youtube.com/embed/PizxUk3lG3c?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1504227435/moving-room-dance_etk0fw.png",
description: "Derek Hough Dancing with the Macy's Stars of Dance-Jaimie Goodwin.",
title: "Moving Room Dance",
genre: "Ballroom",
year: "2013"
)

video5 = Video.create(
video_url: "https://www.youtube.com/embed/SKDnPGD8CIw?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1504227165/la-la-land_y5foik.png",
description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
title: "La La Land - A Lovely Night",
genre: "Jazz",
year: 2016
)

video6 = Video.create(
video_url: "https://www.youtube.com/embed/6lAKlYTQVKY?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_thumb,h_160,w_280/v1501040749/maxresdefault-4_yzuujl.jpg",
description: "Take the Lead - Tango",
title: "Take the Lead - Tango",
genre: "Tango",
year: 2006
)

video7 = Video.create(
video_url: "https://www.youtube.com/embed/l9BbUqHrWFI?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_thumb,h_160,w_280/v1501040741/maxresdefault-5_ekegtz.jpg",
description: "End of season at Kellermans
nobody puts Baby in the corner (I've Had) The Time of My Life",
title: "Time of My Life Dirty Dancing",
genre: "Salsa",
year: 1987
)

video8 = Video.create(
video_url: "https://www.youtube.com/embed/NqGslEZ5I6c?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_thumb,h_160,w_280/v1501040756/maxresdefault-6_tgdwmu.jpg",
description: "A city teenager moves to a small town where rock music and dancing have been banned,
and his rebellious spirit shakes up the populace.",
title: "Footloose",
genre: "footloose dancing",
year: 1984
)

video9 = Video.create(
video_url: "https://www.youtube.com/embed/7oKPYe53h78?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1504227349/grease_rcvhzo.png",
description: "Experience the friendships, romances and adventures of a group of high school kids in the 1950s. Welcome to the singing and dancing world of 'Grease,' the most successful movie musical of all time. A wholesome exchange student (Olivia Newton-John) and a leather-clad Danny (John Travolta) have a summer romance, but will it cross clique lines?",
title: "Grease - You're the One That I Want",
genre: "Grease",
year: 1978
)

video10 = Video.create(
video_url: "https://www.youtube.com/embed/sT2daisxdvA?rel=0&amp;showinfo=0",
image_url: "https://res.cloudinary.com/pancake/image/upload/c_thumb,h_160,w_280/v1501040753/maxresdefault-7_kexint.jpg",
description: "A Brooklyn teenager feels his only chance to succeed is as the king of the disco floor.",
title: "Saturday Night Fever",
genre: "Disco",
year: 1977
)

video11 = Video.create(
  video_url: "https://www.youtube.com/embed/76DQOIWu06k?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508447022/Another_Day_In_the_Sun.png",
  description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  title: "La La Land - Another Day of Sun",
  genre: "Jazz",
  year: 2016
)

video12 = Video.create(
  video_url: "https://www.youtube.com/embed/A7RmBgq4tT4?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508447639/Someone_In_the_Croud.png",
  description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  title: "La La Land - Someone In the Croud",
  genre: "Jazz",
  year: 2016
)

video13 = Video.create(
  video_url: "https://www.youtube.com/embed/m5zdEQHuxOY?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160/v1508447926/Planetarium.png",
  description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  title: "La La Land - Planetarium",
  genre: "Jazz",
  year: 2016
)

video14 = Video.create(
  video_url: "https://www.youtube.com/embed/NkD10lhMMrg?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508448298/Epilogue.png",
  description: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  title: "La La Land - EPILOGUE",
  genre: "Jazz",
  year: 2016
)

video15 = Video.create(
  video_url: "https://www.youtube.com/embed/w40ushYAaYA?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508449041/Singing_in_the_Rain.png",
  description: "A spoof of the turmoil that afflicted the movie industry in the late 1920s when movies went from silent to sound. When two silent movie stars', Don Lockwood and Lina Lamont, latest movie is made into a musical a chorus girl is brought in to dub Lina's speaking and singing. Don is on top of the world until Lina finds out.",
  title: "Singing In The Rain",
  genre: "Jazz",
  year: 1952
)

video16 = Video.create(
  video_url: "https://www.youtube.com/embed/E-RO_Q3NkD8?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508450190/Mr_and_Mrs_Smith.png",
  description: "John (Brad Pitt) and Jane Smith (Angelina Jolie), a couple in a stagnating marriage, live a deceptively mundane existence. However, each has been hiding a secret from the other: they are assassins working for adversarial agencies. When they are both assigned to kill the same target, Benjamin Danz (Adam Brody), the truth comes to the surface. Finally free from their cover stories, they discover that they have been assigned to kill each other, sparking a series of explosive attacks.",
  title: "Mr & Mrs Smith",
  genre: "Tango",
  year: 2005
)

video17 = Video.create(
  video_url: "https://www.youtube.com/embed/kaJv6L8vF-Y?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508450469/Zorro.png",
  description: "After being imprisoned for 20 years, Zorro -- Don Diego de la Vega (Anthony Hopkins) -- receives word that his old enemy, Don Rafael Montero (Stuart Wilson), has returned. Don Diego escapes and returns to his old headquarters, where he trains aimless drunk Alejandro Murrieta (Antonio Banderas) to be his successor. Meanwhile, Montero -- who has secretly raised Diego's daughter, Elena (Catherine Zeta-Jones), as his own -- hatches a plot to rob California of its gold.",
  title: "Zorro",
  genre: "Tango",
  year: 1998
)

video18 = Video.create(
  video_url: "https://www.youtube.com/embed/UUO5WPaIr-s?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508450834/Strictly_Ballroom_learning_paso_doble.png",
  description: "A top ballroom dancer pairs with a plain, left-footed local girl when his maverick style earns him the disdain of his more conventionally-minded colleagues. Together, the team gives it their all and makes dreams of the National Championship title come true.",
  title: "Strictly Ballroom - Learning the paso doble",
  genre: "Paso Doble",
  year: 1992
)

video19 = Video.create(
  video_url: "https://www.youtube.com/embed/ZeNbzZ2uD60?rel=0&amp;showinfo=0&amp;start=43",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508451166/Strictly_Ballroom_Samba.png",
  description: "A top ballroom dancer pairs with a plain, left-footed local girl when his maverick style earns him the disdain of his more conventionally-minded colleagues. Together, the team gives it their all and makes dreams of the National Championship title come true.",
  title: "Strictly Ballroom - Samba Sacrilege",
  genre: "Samba",
  year: 1992
)

video20 = Video.create(
  video_url: "https://www.youtube.com/embed/iL2qY9hE7cE?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508451439/Strictly_Ballroom_Time_After_Time.png",
  description: "A top ballroom dancer pairs with a plain, left-footed local girl when his maverick style earns him the disdain of his more conventionally-minded colleagues. Together, the team gives it their all and makes dreams of the National Championship title come true.",
  title: "Strictly Ballroom - Training",
  genre: "Rumba",
  year: 1992
)

video21 = Video.create(
  video_url: "https://www.youtube.com/embed/8uRYgVTECdQ?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508451712/Strictly_Ballroom_Perhaps.png",
  description: "A top ballroom dancer pairs with a plain, left-footed local girl when his maverick style earns him the disdain of his more conventionally-minded colleagues. Together, the team gives it their all and makes dreams of the National Championship title come true.",
  title: "Strictly Ballroom - Perhaps",
  genre: "Rumba",
  year: 1992
)

video22 = Video.create(
  video_url: "https://www.youtube.com/embed/KbPh4OYzDfs?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508452176/Grease_Lightening.png",
  description: "Experience the friendships, romances and adventures of a group of high school kids in the 1950s. Welcome to the singing and dancing world of 'Grease,' the most successful movie musical of all time. A wholesome exchange student (Olivia Newton-John) and a leather-clad Danny (John Travolta) have a summer romance, but will it cross clique lines?",
  title: "Grease - Grease Lightening",
  genre: "Grease",
  year: 1978
)

video23 = Video.create(
  video_url: "https://www.youtube.com/embed/3m8UoYzBvHU?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508452799/Grease_Summer_Nights.png",
  description: "Experience the friendships, romances and adventures of a group of high school kids in the 1950s. Welcome to the singing and dancing world of 'Grease,' the most successful movie musical of all time. A wholesome exchange student (Olivia Newton-John) and a leather-clad Danny (John Travolta) have a summer romance, but will it cross clique lines?",
  title: "Grease - Summer Nights",
  genre: "Grease",
  year: 1978
)

video24 = Video.create(
  video_url: "https://www.youtube.com/embed/fY5pmzmiDO8?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508453093/Grease_Hand_Jive.png",
  description: "Experience the friendships, romances and adventures of a group of high school kids in the 1950s. Welcome to the singing and dancing world of 'Grease,' the most successful movie musical of all time. A wholesome exchange student (Olivia Newton-John) and a leather-clad Danny (John Travolta) have a summer romance, but will it cross clique lines?",
  title: "Grease - Hand Jive",
  genre: "Grease",
  year: 1978
)

video25 = Video.create(
  video_url: "https://www.youtube.com/embed/TcWPiHjIExA?rel=0&amp;showinfo=0",
  image_url: "https://res.cloudinary.com/pancake/image/upload/c_scale,h_160,w_280/v1508986480/napolean_dynomite.png",
  description: "In small-town Preston, Idaho, awkward teen Napoleon Dynamite (Jon Heder) has trouble fitting in. After his grandmother is injured in an accident, his life is made even worse when his strangely nostalgic uncle, Rico (Jon Gries), shows up to keep an eye on him. With no safe haven at home or at school, Napoleon befriends the new kid, Pedro (Efren Ramirez), a morose Hispanic boy who speaks little English. Together the two launch a campaign to run for class president.",
  title: "Napolean Dynomite",
  genre: "Napolean Dynomite",
  year: "2004"
)

Favorite.destroy_all
favorite1 = Favorite.create(user_id: demo_user.id, video_id: video1.id)
favorite2 = Favorite.create(user_id: demo_user.id, video_id: video2.id)
favorite3 = Favorite.create(user_id: demo_user.id, video_id: video3.id)
favorite4 = Favorite.create(user_id: demo_user.id, video_id: video4.id)

favorite5 = Favorite.create(user_id: super_user.id, video_id: video10.id)
favorite6 = Favorite.create(user_id: super_user.id, video_id: video9.id)

favorite7 = Favorite.create(user_id: bat_user.id, video_id: video6.id)
favorite8 = Favorite.create(user_id: bat_user.id, video_id: video7.id)
