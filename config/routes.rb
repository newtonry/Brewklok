Brewklok::Application.routes.draw do
  resources :recipes
  
  resources :users
  resource :session

  root "recipes#index"
end
