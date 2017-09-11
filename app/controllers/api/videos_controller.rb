class Api::VideosController < ApplicationController
  before_action :require_logged_in

  def index
    query = params[:query]
    if query
      if query[:genre]
        search_by_genre
      elsif query[:title]
        search_by_title
      else
        search_by_year
      end
    else
      @videos = Video.all
      render "api/videos/index"
    end
  end

  def show
    @video = Video.find(params[:id])
    render "api/videos/show"
  end

  def search_by_genre
    genre = params[:query][:genre].downcase
    @videos = Video.where("lower(genre) LIKE ?", "%#{genre}%")
    render "api/videos/index"
  end

  def search_by_title
    title = params[:query][:title].downcase
    @videos = Video.where("lower(title) LIKE ?", "%#{title}%")
    render "api/videos/index"
  end

  def search_by_year
    year = params[:query][:year].to_i
    @videos = Video.where("year = ?", year)
    render "api/videos/index"
  end
end
