class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    @recipes.sort_by! {|recipe| recipe.name}
    render :index
  end
  
  def show
    @recipe = Recipe.includes(:ingredients).find(params[:id])

    respond_to do |format|
      format.html 
      format.json { render :json => @recipe, include: :ingredients }
    end
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
    @recipe = Recipe.find(params[:id])
    render :run
  end

  def update    
    Ingredient.update(params[:recipe].keys, params[:recipe].values)
        
    render json: 'Request made'.to_json
  end
end
