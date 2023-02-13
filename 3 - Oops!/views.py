# builtin modules :
import os
from datetime import datetime
import datetime as dt

# external modules :
from flask import Blueprint , request ,  render_template , Response , session , abort
from werkzeug.security import check_password_hash 
from flask_login import login_user

# third party modules :
from settings import BASE_DIR
from db_extensions import add_user , add_media
from db_extensions import *

Oops = Blueprint('Oops' , __name__)

@Oops.route('/signup' , methods= ['GET','POST'])
@Oops.route('/join' , methods= ['GET','POST'])
async def signup() :
    if request.method == 'POST' :
        user_name = request.form.get('user_name')
        card_number = request.form.get('card_number')
        email = request.form.get('email')
        password = request.form.get('password')
        picture = request.files.get('profile_pic')

        if user_name and card_number and email and password :
            picture_path = None
            if picture :
                extension = picture.filename.split('.')[-1]
                if extension in ('png' , 'jpg' , 'jpeg') :
                    picture_path = os.path.join(BASE_DIR , 'static' , 'imgs' , str(datetime.utcnow()).replace(':','-').replace(' ','_') , extension)
                    picture.save(picture_path)
                    add_media(picture_path , os.path.getsize(picture_path))


            add_user(user_name , card_number , email , password , picture_path)

            return 'user added seccufuly !'

    return render_template('signup.html')

@Oops.route('/signin' , methods = ['GET' , 'POST'])
@Oops.route('/login' , methods = ['GET' , 'POST'])
async def signin() :
    print(request.cookies)
    if request.method == 'POST' :
        card_number = request.form.get('card_number')
        password = request.form.get('password')

        exist = get_user(card_number = card_number)
        if exist :
            if check_password_hash(exist.password_hash , password) :
                login_user(exist)
                return render_template('test.html')
            else : 'wrong password'
        else : 'card_number not found'

    return render_template('signin.html')

@Oops.route('/send-reset-password-email' , methods = ['GET','POST'])
async def send_reset_password_email() :
    if request.method == 'POST' :
        email = request.form.get('email')
        if email :
            session['email'] = email
            return render_template('send_reset_password_email.html') # here send that the email sent
    return render_template('send_reset_password_email.html')

@Oops.route('/reset-password')
async def reset_password() :
    if session.get('email') :
        return render_template('reset_password.html')
    abort(401) # page not authorized
