class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy

  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      flash[:success] = "Micropost created!"
      redirect_to current_user
    else
      flash[:danger] = "Sorry! Word Limit: 2729 characters."
      redirect_to  current_user #'static_pages/home'
    end
  end

  def destroy
    @micropost.destroy
    #flash[:success] = "Micropost deleted"
    #redirect_to request.referrer || root_url
    redirect_to current_user
  end

  private

    def micropost_params
      #params.require(:micropost).permit(:content)
      params.require(:micropost).permit(:content, :picture)
    end

    def correct_user
      @micropost = current_user.microposts.find_by(id: params[:id])
      redirect_to root_url if @micropost.nil?
    end
end