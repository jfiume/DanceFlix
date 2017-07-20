# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create!(username: "WillDavis@willdemos.net", password: "password")

video1 = Video.create(
  video_url: "https://www.youtube.com/embed/dk-nWE9yeG8",
  image_url: "http://www.hypebot.com/.a/6a00d83451b36c69e201b8d207777b970c-600wi",
  description: "The final paso doble from Strictly Ballroom",
  title: "Paso Doble",
  genre: "Paso Doble",
  year: 1993
)
