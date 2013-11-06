class AddUserIdToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :user_id, :integer, null: false, default: 1
  end
end
