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


#american ipa
ipa = Recipe.create(
  name: "American IPA",
  notes: "An all grain American IPA recipe",
)

ipa.ingredients.create(
  name: "Pale Malt 2-row",
  amount: "6 lbs",
  notes: "Remove the grains at 30",
  time: 0
)

ipa.ingredients.create(
  name: "Munich Malt",
  amount: "1 lb",
  notes: "Remove the grains at 30",
  time: 0
)

ipa.ingredients.create(
  name: "Chinook Hops",
  amount: "0.5 oz",
  notes: "Excellent for hopping American-style Pale Ales, especially those brewed to higher gravities.",
  time: 30
)

ipa.ingredients.create(
  name: "Amarillo Hops",
  amount: "0.5 oz",
  notes: "Amarillo is an aroma-type cultivar of recent origin (alpha acid: 8-11% / beta acid: 6-7% )",
  time: 60
)

ipa.ingredients.create(
  name: "Amarillo Hops",
  amount: "0.5 oz",
  time: 75
)

ipa.ingredients.create(
  name: "Cascade Hops",
  amount: "0.5 oz",
  notes: "A very popular U.S. variety, with a moderate bitterness level and fragrant, flowery aroma",
  time: 85
)


ipa.ingredients.create(
  name: "Amarillo Hops",
  amount: "0.5 oz",
  time: 85
)

ipa.ingredients.create(
  name: "Safale-05 Yeast",
  notes: "Add after cooldown",
  time: 85
)

ipa.ingredients.create(
  name: "Cascade Hops",
  amount: "0.5 oz",
  notes: "Dry hopping, add after fermentation",
  time: 85
)


#imperial stout
istout = Recipe.create(
  name: "Imperial Stout",
  notes: "Inspired by brewers back in the 1800's to win over the Russian Czar, this is the king of stouts, boasting high alcohol by volumes and plenty of malt character. Low to moderate levels of carbonation with huge roasted, chocolate and burnt malt flavours. Often dry. Suggestions of dark fruit and flavors of higher alcohols are quite evident. Hop character can vary from none, to balanced to aggressive.",
)

istout.ingredients.create(
  name: "Pale Malt 2-row",
  amount: "14 lbs",
  notes: "Remove the grains at 30",
  time: 0
)

istout.ingredients.create(
  name: "Caramel/Crystal Malt",
  amount: "1 lb",
  notes: "Remove the grains at 30",
  time: 0
)

istout.ingredients.create(
  name: "Roasted Barley",
  amount: "1 lb",
  notes: "Remove the grains at 30",
  time: 0
)

istout.ingredients.create(
  name: "Black Patent Malt",
  amount: "0.75 lb",
  notes: "Remove the grains at 30",
  time: 0
)

istout.ingredients.create(
  name: "Chocolate Malt",
  amount: "0.5 lb",
  notes: "Remove the grains at 30",
  time: 0
)

istout.ingredients.create(
  name: "Northern Brewer Hops",
  amount: "1 oz",
  notes: "A strong fragrant hop with a rich rough-hewn flavor and aroma, ideal for steam-style beers and ales",
  time: 0
)

istout.ingredients.create(
  name: "East Kent Goldings Hops",
  amount: "1.5 oz",
  time: 60
)

istout.ingredients.create(
  name: "Fuggles Hops",
  amount: "1 oz",
  notes: "alpha acid: 3.8-5.5%",
  time: 70
)

istout.ingredients.create(
  name: "Cascade Hops",
  amount: "0.5 oz",
  time: 88
)

istout.ingredients.create(
  name: "Irish Ale (Wyeast Labs #1084)",
  amount: "0.5 oz",
  notes: "Add yeast after cooldown",
  time: 88
)


#Gose
gose = Recipe.create(
  name: "Gose",
  notes: "An old German beer style from Leipzig, Gose is an unfiltered wheat beer made with 50-60% malted wheat, which creates a cloudy yellow color and provides a refreshing crispness and twang.",
)

gose.ingredients.create(
  name: "Wheat malt",
  amount: "5 lbs",
  time: 0
)

gose.ingredients.create(
  name: "Pilsner malt",
  amount: "3.25 lbs",
  time: 0
)

gose.ingredients.create(
  name: "Acidulated malt",
  amount: "2 lbs",
  notes: "A type of malted barley which contains a small proportion (usually 1-2% by weight) of lactic acid",
  time: 0
)

gose.ingredients.create(
  name: "Santiam hops",
  amount: "0.5",
  notes: "Santiam is regarded as a substitute for German-grown Tettnanger",
  time: 0
)

gose.ingredients.create(
  name: "Irish moss",
  amount: "1 tsp",
  notes: "or Whirlfloc tablet",
  time: 45
)

gose.ingredients.create(
  name: "Sea salt",
  amount: "0.75 oz",
  time: 50
)

gose.ingredients.create(
  name: "White Labs WLP029 Yeast",
  notes: "Add yeast after cooldown",
  time: 55
)