class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user.nil?
      flash[:errors] << "Credentials were wrong"
      render :new
    else
      login(user)
      redirect_to user_url(user)
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