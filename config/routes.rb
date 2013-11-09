Brewklok::Application.routes.draw do
  resources :recipes do
    member do 
      get "run"
    end
  end
  
  resources :users
  resource :session
  
  match "/about", to: "static_pages#about", via: 'get'
  root "static_pages#index"
end
