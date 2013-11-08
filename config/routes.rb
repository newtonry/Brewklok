Brewklok::Application.routes.draw do
  resources :recipes do
    member do 
      get "run"
    end
  end
  
  resources :users
  resource :session
  
  root "static_pages#index"
end
