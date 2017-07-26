class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def index
    if params[:user_id]
      @favorites = Favorite.where("user_id = ?", params[:user_id])
    else
      @favorites = Favorite.all
    end
    render :index
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
      render :show
    else
      flash.now[:errors] = @favorite.errors.full_messages
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render :show
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :video_id)
  end
end
