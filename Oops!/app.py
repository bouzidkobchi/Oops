from flask import Flask
from flask_migrate import Migrate

from models import db
import os

app = Flask(__name__)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_NAME = 'Oops.db'

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app,db)

# create db if not exists :
if DB_NAME not in os.listdir(os.path.join(BASE_DIR , 'instance')) :
    with app.app_context() :
        db.create_all()

@app.route('/')
def index() :
    return 'welcome bouzid to Oops!'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
 