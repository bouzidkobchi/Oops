# builtin modules :
import os

# external modules :
from flask import Flask
from flask_migrate import Migrate

# third party modules :
from models import db
from views import Oops
from RestApi import Oops_api 
from auth import login_manager

app = Flask(__name__)
app.app_context().push()
app.register_blueprint(Oops)
app.register_blueprint(Oops_api)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_NAME = 'Oops.db'

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}?check_same_thread=False'
app.config['CHECK_SAME_THRED'] = False
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'bouzidandhissupersecretkey'

migrate = Migrate(db=db)

db.init_app(app)
login_manager.init_app(app)
migrate.init_app(app)

# create db if not exists :
if DB_NAME not in os.listdir(os.path.join(BASE_DIR , 'instance')) :
    db.create_all()

@app.route('/')
def index() :
    return 'welcome bouzid to Oops!'


if __name__ == '__main__' :
    app.run(debug = True)