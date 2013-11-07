class UpdatingIngredients < ActiveRecord::Migration
  def change
    remove_column :recipes, :notes
    remove_column :ingredients, :notes
    
    add_column :recipes, :notes, :text
    add_column :ingredients, :notes, :text
    add_column :ingredients, :amount, :text
  end
end
