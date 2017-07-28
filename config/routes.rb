Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    resources :favorites, only: [:create, :index, :destroy]
    resources :views, only: [:create, :show, :index]
  end
  get 'api/search', to: "api/videos#search", defaults: {format: :json}
end
