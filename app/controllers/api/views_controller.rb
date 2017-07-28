class Api::ViewsController < ApplicationController
  def show
    @view = View.find(params[:id])
    render :show
  end

  def index
    if params[:user_id]
      @views = View.where("user_id = ?", params[:user_id])
    else
      @views = View.all
    end
    render :index
  end

  def create
    @view = View.new(view_params)
    @view.user_id = current_user.id
    @view.count = 1
    if @view.save
      render :show
    else
      flash.now[:errors] = @view.errors.full_messages
    end
  end

  def update
    @view = View.find(params[:id])
    @view.count += 1
    if @view.save
      render :show
    else
      flash.now[:errors] = @view.errors.full_messages
    end
  end

  private
  def view_params
    params.require(:view).permit(:user_id, :video_id)
  end
end
