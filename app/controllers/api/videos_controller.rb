class Api::VideosController < ApplicationController
  before_action :require_logged_in

  def index
    @videos = Video.all
    render "api/videos/index"
  end

  def show
    @video = Video.find(params[:id])
    render "api/videos/show"
  end
end
