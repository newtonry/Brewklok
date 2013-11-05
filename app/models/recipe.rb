class Recipe < ActiveRecord::Base
  attr_accessible :name, :ingredients
  validates :name, presence: true
  
  has_many :ingredients, inverse_of: :recipe
end
