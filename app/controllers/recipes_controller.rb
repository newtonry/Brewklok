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
    raise params
    
    # @recipe = params[:recipe]
    # @recipe = Recipe.find(params[:id])
    
    #needs to update the ingredients individually here
    # params[:recipe][:ingredients].each do |ingredient|
    #   
    # end


    Ingredient.update(params[:recipe][:ingredients].keys, params[:recipe][:ingredients].values)

      
    
    # if @recipe.save
    #   render :json => @recipe# might need to include ingredients as well
    # else
    #   redirect_to "http://www.google.com" #decide what to do here
    # end
  end

end
