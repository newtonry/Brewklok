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


# belgian wit http://www.beersmith.com/Recipes2/recipe_368.htm

wmcj = Recipe.create(
name: "Belgian Wit",
notes: "A Belgian Style ale that's very pale and cloudy in appearance due to it being unfiltered and the high level of wheat, and sometimes oats, that's used in the mash. Always spiced, generally with coriander, orange peel and other oddball spices or herbs in the back ground. The crispness and slight twang comes from the wheat and the lively level of carbonation."
)

wmcj.ingredients.create(
name: "Wheat Liquid Extract",
amount: "4 lbs",
time: 30
)

wmcj.ingredients.create(
name: "Wheat Kicker",
amount: "1.4 lb",
time: 30
)

wmcj.ingredients.create(
name: "Cara-Pils/Dextrine",
amount: "0.5 lbs",
notes: "Remove the grains at 30",
time: 0
)

wmcj.ingredients.create(
name: "Aromatic Malt",
amount: "0.1 lbs",
notes: "Remove the grains at 30",
time: 0
)

wmcj.ingredients.create(
name: "Orange Peel",
notes: "Boil for 5 more minutes",
time: 55
)

wmcj.ingredients.create(
name: "Coriander Seed",
time: 55
)

wmcj.ingredients.create(
name: "Corn Sugar",
amount: "1 lbs",
time: 30
)

wmcj.ingredients.create(
name: "Gypsum",
amount: "2 tsp",
time: 35
)

wmcj.ingredients.create(
name: "Wyeast Labs #3463",
notes: "Add yeast after cooldown",
time: 60
)

wmcj.ingredients.create(
name: "Saaz Hops",
amount: "0.5 oz",
time: 55
)

wmcj.ingredients.create(
name: "Saaz Hops",
amount: "1 oz",
notes: "Add yeast after cooldown",
time: 33
)



#ESB

esb = Recipe.create(
  name: "Extra Special Bitter",
  notes: "ESBs are essentially more aggressive and more balanced bitters, both in alcohol and hop character, but nothing overpowering.",
)

esb.ingredients.create(
  name: "Gold Liquid Malt Extract",
  amount: "6.6 lbs",
  time: 30
)

esb.ingredients.create(
  name: "Simpsons medium crystal malt",
  amount: "2 lb",
  notes: "Remove the grains at 30",
  time: 0
)

esb.ingredients.create(
  name: "Willamette",
  amount: "2 oz",
  notes: "Willamette has a fragrant spicy woody aroma",
  time: 30
)

esb.ingredients.create(
  name: "East Kent Golding Hops",
  amount: "1 oz",
  notes: "The premier English aroma hop",
  time: 75
)

esb.ingredients.create(
  name: "East Kent Golding Hops",
  amount: "1 oz",
  time: 85
)

esb.ingredients.create(
  name: "East Kent Golding Hops",
  amount: "1 oz",
  notes: "Dry hop after fermentation",
  time: 85
)

esb.ingredients.create(
  name: "Safale-05 Yeast",
  notes: "Add after cooldown",
  time: 85
)


#not yet complete esb


#meadowlark ipa
#imperial stout
#Butternuts gose