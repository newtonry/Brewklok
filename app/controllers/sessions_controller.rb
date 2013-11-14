class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
    if user.nil?
      flash[:errors] = flash[:errors] || []
      flash[:errors] << "Credentials were wrong"
      render :new
    else
      login(user)
      flash[:success] = ["Welcome back #{user.username}!"]
      redirect_to recipes_url
    end
  end

  def destroy
    logout!
    redirect_to root_url
  end

  def new
    render :new
  end
end