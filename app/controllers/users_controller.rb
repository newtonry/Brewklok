class UsersController < ApplicationController
  def new
    render :new
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def create
    @user = User.new(username: params[:user][:username])
    @user.password = params[:user][:password]
    @user.reset_session_token!

    if @user.save
      login(@user)
      flash[:success] = ["Thank you for signing up #{@user.username}!"]
      redirect_to user_url(@user)
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

end
