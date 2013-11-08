class StaticPagesController < ApplicationController
  def index
    @recipes = Recipe.find(:all, limit: 5, order: 'created_at desc')
    render :index
  end

end
