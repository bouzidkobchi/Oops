from flask import Flask, render_template , request
from flask_mail import Mail , Message

app = Flask(__name__)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'elmokhtarie1096@gmail.com'
app.config['MAIL_PASSWORD'] = 'bouzid2003'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/')
def index():
    msg = Message(
        'hello abdellah, this message is from Oops using flask , enjoy !' ,
        recipients = ['elmokhtarie1096@gmail.com' , 'abdeallahdz2004@gmail.com'] ,
        sender = 'elmokhtarie1096@gmail.com'
    )
    msg.body = 'hello broooooooooooo from Oooooooooooops !'
    mail.send(msg)
    return 'message sended'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
 