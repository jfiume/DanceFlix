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
  image_url: "http://res.cloudinary.com/pancake/image/upload/c_thumb,h_240,w_180/v1500586087/Strictly-Ballroom_unr1re.png",
  description: "The final paso doble from Strictly Ballroom",
  title: "Paso Doble",
  genre: "Paso Doble",
  year: 1993
)

video2 = Video.create(
  video_url: "https://www.youtube.com/embed/16EuniBuiz0",
  image_url: "http://res.cloudinary.com/pancake/image/upload/c_thumb,h_240,w_180/v1500586730/WestCostSwing_ncfmty.jpg",
  description: "They do a human cartwheel!",
  title: "West Cost Swing for the win",
  genre: "West Cost Swing",
  year: 2012
)
