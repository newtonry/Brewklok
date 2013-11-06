module SessionsHelper
  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  
  def require_no_current_user!
    redirect_to user_url(current_user) unless current_user.nil?
  end
end