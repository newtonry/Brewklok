class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.reverse
    render :index
  end
  
  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end
  
  def new
    render :new
  end
  
  def create
    @recipe = Recipe.new(params[:recipe])    
    @recipe.ingredients.new(params[:ingredients].values)
    
    @recipe.user_id = current_user.id if logged_in?
        
    if @recipe.save
      redirect_to recipes_url
    else
      flash[:errors] = @recipe.errors.full_messages
      render :new      
    end
  end

  def run
    render :run
  end

end
