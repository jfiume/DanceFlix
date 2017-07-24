class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def index
    @favorites = Favorite.all
    render "api/favorites/index"
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
      render "api/favorites/index"
    else
      flash.now[:errors] = @favorite.errors.full_messages
    end
  end

  def destroy
    @favorite = favorite.find(params[:id])
    @favorite.destroy
    redirect_to :index
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :video_id)
  end
end
