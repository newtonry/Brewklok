class Recipe < ActiveRecord::Base
  attr_accessible :name, :ingredients, :user_id, :notes 
  validates :name, :user_id, presence: true
  
  has_many :ingredients, inverse_of: :recipe
  belongs_to :user
end
