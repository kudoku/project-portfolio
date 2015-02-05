class UserMailer < ApplicationMailer

  default from: 'park.joonw@gmail.com'
 
  def contact_email(username, user_email, message)
    @username = username
    @user_email = user_email
    @message = message
    mail(to: @username, subject: 'Contact')
  end
end
