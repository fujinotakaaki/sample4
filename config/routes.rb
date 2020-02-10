Rails.application.routes.draw do
  resources :homes, only: [:new, :create, :index]
  root 'homes#index'
  # get '/new', to: 'homes#new'
  # get '/index', to: 'homes#index'
  get '/game', to: 'homes#game'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
