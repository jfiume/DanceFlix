# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create!(username: "WillDavis@willdemos.net", password: "password")


Video.destroy_all
video1 = Video.create(
  video_url: 'https://www.youtube.com/embed/dk-nWE9yeG8',
  image_url: "http://res.cloudinary.com/pancake/image/upload/c_scale,h_300,w_400/v1500586087/Strictly-Ballroom_unr1re.png",
  description: "The final paso doble from Strictly Ballroom",
  title: "Paso Doble",
  genre: "Paso Doble",
  year: 1993
)

video2 = Video.create(
  video_url: "https://www.youtube.com/embed/16EuniBuiz0",
  image_url: "http://res.cloudinary.com/pancake/image/upload/c_scale,h_300,w_400/v1500586730/WestCostSwing_ncfmty.jpg",
  description: "They do a human cartwheel!",
  title: "West Cost Swing for the win",
  genre: "West Cost Swing",
  year: 2012
)

video3 = Video.create(
video_url: "https://www.youtube.com/embed/Cj3AV92fJ90",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_thumb,h_300,w_400/v1501040748/maxresdefault-1_tulp5n.jpg",
description: "JABBAWOCKEEZ perform at the 2017 NBA Finals Championship Game",
title: "JABBAWOCKEEZ at the NBA Finals 2017",
genre: "breakance",
year: 2017
)

video4 = Video.create(
video_url: "https://www.youtube.com/embed/PizxUk3lG3c",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_thumb,h_300,w_400/v1501040751/maxresdefault-2_j4prie.jpg",
description: "Derek Hough Dancing with the Macy's Stars of Dance-Jaimie Goodwin.",
title: "Moving Room Dance",
genre: "ballroom",
year: "2013"
)

video5 = Video.create(
video_url: "https://www.youtube.com/embed/SKDnPGD8CIw",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_thumb,h_300,w_400/v1501040754/maxresdefault-3_kkamjo.jpg",
description: "La La Land - A Lovely Night",
title: "La La Land - A Lovely Night",
genre: "Jazz",
year: 2016
)

video6 = Video.create(
video_url: "https://www.youtube.com/embed/6lAKlYTQVKY",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_scale,h_300,w_400/v1500958070/0-2_slwrs6.jpg",
description: "Take the Lead - Tango",
title: "Take the Lead - Tango",
genre: "Tango",
year: 2006
)

video7 = Video.create(
video_url: "https://www.youtube.com/embed/l9BbUqHrWFI",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_scale,h_300,w_400/v1500958241/0-3_pzysyr.jpg",
description: "End of season at Kellermans
nobody puts Baby in the corner (I've Had) The Time of My Life",
title: "Time of My Life",
genre: "Salsa",
year: 1987
)

video8 = Video.create(
video_url: "https://www.youtube.com/embed/NqGslEZ5I6c",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_scale,h_300,w_400/v1500958538/0-4_t366ug.jpg",
description: "A city teenager moves to a small town where rock music and dancing have been banned,
and his rebellious spirit shakes up the populace.",
title: "Footloose",
genre: "footloose dancing",
year: 1984
)

video9 = Video.create(
video_url: "https://www.youtube.com/embed/7oKPYe53h78",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_thumb,h_300,w_400/v1501040763/mqdefault_ylbug7.jpg",
description: "Grease is the word",
title: "Grease - You're the one that I want",
genre: "grease lightening",
year: 1978
)

video10 = Video.create(
video_url: "https://www.youtube.com/embed/sT2daisxdvA",
image_url: "http://res.cloudinary.com/pancake/image/upload/c_scale,h_300,w_400/v1500959013/0-6_fgrfrx.jpg",
description: "A Brooklyn teenager feels his only chance to succeed is as the king of the disco floor.",
title: "Saturday Night Fever",
genre: "Disco",
year: 1977
)

Favorite.destroy_all
favorite1 = Favorite.create(user_id: demo_user.id, video_id: video1.id)
favorite2 = Favorite.create(user_id: demo_user.id, video_id: video2.id)
favorite3 = Favorite.create(user_id: demo_user.id, video_id: video3.id)
favorite4 = Favorite.create(user_id: demo_user.id, video_id: video4.id)
