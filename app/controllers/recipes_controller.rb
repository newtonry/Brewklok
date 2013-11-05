class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :index
  end
  
  
  def show
    
  end
  
  def new
    render :new
  end
  
  def create
    @recipe = Recipe.new(params[:recipe])
    
    @recipe.ingredients.new(params[:ingredients].values)
    
    # params[:ingredients].each do |ingredient|
    #   @recipe.ingredients.create(ingredient)
    # end
    
    if @recipe.save
      redirect_to recipes_url
    else
      flash[:errors] = @recipe.errors.full_messages
      render :new      
    end
  
  


  end

end
