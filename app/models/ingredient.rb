class Ingredient < ActiveRecord::Base
  attr_accessible :name, :time, :recipe_id, :notes, :amount
  belongs_to :recipe
  
  validates :name, :time, :recipe, presence: true

  default_scope { order('time') } 
end
