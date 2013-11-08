# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
amount: "0.75 lb",
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


#http://www.whitehouse.gov/blog/2012/09/01/ale-chief-white-house-beer-recipe

whha = Recipe.create(
name: "White House Honey Ale",
notes: "The Presidential Honey Ale recipe released by the Obama administration"
)

whha.ingredients.create(
name: "Light malt extract",
amount: "6.6 lbs",
time: 30
)

whha.ingredients.create(
name: "Dried Malt Extract",
amount: "1 lb",
time: 30
)

whha.ingredients.create(
name: "Crushed Amber Malt",
amount: "12 oz",
notes: "Remove the grains at 30",
time: 0
)

whha.ingredients.create(
name: "Biscuit Malt",
amount: "8 oz",
notes: "Remove the grains at 30",
time: 0
)

whha.ingredients.create(
name: "White House Honey",
amount: "1 lb",
notes: "Boil for 5 more minutes",
time: 80
)

whha.ingredients.create(
name: "Kent Goldings Hop Pellets",
amount: "1.5 oz",
time: 35
)

whha.ingredients.create(
name: "Fuggles Hop Pellets",
amount: "1.5 oz",
notes: "Remove at 30",
time: 79
)

whha.ingredients.create(
name: "Gypsum",
amount: "2 tsp",
time: 35
)

whha.ingredients.create(
name: "Dry Ale Yeast",
amount: "1 lb",
notes: "Add yeast after cooldown",
time: 85
)
