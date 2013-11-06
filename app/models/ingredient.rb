class Ingredient < ActiveRecord::Base
  attr_accessible :name, :time, :recipe_id
  belongs_to :recipe
  
  validates :name, :time, :recipe, presence: true
end
