# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Ingredient.create(
name: "Munich Malt"
)


alt = Recipe.create(
name: "Dusseldorf Alt",
notes: "Old world alt from http://byo.com/stories/item/1205-old-world-alt"
)

alt.ingredients.create(
name: "Munich malt",
amount: "2.5 lbs",
notes: "Remove at 30",
time: 0
)

alt.ingredients.create(
name: "German CaraHell",
amount: ".075 lb",
notes: "Remove at 30",
time: 0
)

alt.ingredients.create(
name: "Light pilsner malt extract",
amount: "3 lbs",
time: 30
)

alt.ingredients.create(
name: "Liberty hops",
amount: "2 oz",
time: 60
)