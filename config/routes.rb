Rails.application.routes.draw do
  resources :homes, only: [:new, :create, :index]
  root 'homes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
