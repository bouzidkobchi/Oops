from flask_login import LoginManager
from db_extensions import get_user

login_manager = LoginManager()

@login_manager.user_loader
def load_user(id) : return get_user(id)
