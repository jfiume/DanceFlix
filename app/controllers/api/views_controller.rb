class Api::ViewsController < ApplicationController
  def show
    @view = View.find(params[:id])
    render :show
  end

  def create
    @view = View.new(view_params)
    @view.user_id = current_user.id
    if @view.save
      render :show
    else
      flash.now[:errors] = @view.errors.full_messages
    end
  end

  private
  def view_params
    params.require(:views).permit(:user_id, :video_id)
  end
end
