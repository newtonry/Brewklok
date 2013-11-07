class AddingNoteToIngredient < ActiveRecord::Migration
  def change
    add_column :recipes, :notes, :text, default: :null
    add_column :ingredients, :notes, :text, default: :null
  end
end
