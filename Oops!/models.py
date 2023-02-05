from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

# M2M relational tables :

saved_posts = db.Table(
    'saved_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

hidden_posts = db.Table(
    'hidden_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

reported_posts = db.Table(
    'reported_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

liked_posts = db.Table(
    'liked_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

disliked_posts = db.Table(
    'disliked_posts' ,
    db.Column('user_id',db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('post_id',db.Integer , db.ForeignKey('post.id') , primary_key = True) ,
)

liked_comments = db.Table(
    'liked_comments' ,
    db.Column('user_id' , db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('comment_id' , db.Integer , db.ForeignKey('comment.id') , primary_key = True) ,
)

disliked_comments = db.Table(
    'disliked_comments' ,
    db.Column('user_id' , db.Integer , db.ForeignKey('user.id') , primary_key = True) ,
    db.Column('comment_id' , db.Integer , db.ForeignKey('comment.id') , primary_key = True) ,
)

class user(UserMixin , db.Model) :
    id = db.Column(db.Integer , primary_key = True)

    # personal info :
    user_name = db.Column(db.String(30) , nullable = False , unique = True)
    first_name = db.Column(db.String(20) , nullable = False)
    family_name = db.Column(db.String(20) , nullable = False)
    card_number = db.Column(db.String(12) , nullable = False , unique = True)

    # account info :
    email = db.Column(db.String(50) , nullable = False , unique = True)
    password_hash = db.Column(db.String(200))
    picture_path = db.Column(db.String(200))
    favorite_lang = db.Column(db.String(2) , default = 'en')        # ar : arabic , en : english , fr : french
    signup_time = db.Column(db.DateTime , default = datetime.now())
    user_type = db.Column(db.String(1), default = 's')              # a : admin , w : worker , t : teacher , s : student
    is_blocked = db.Column(db.Boolean , default = False)
    
    # data references (account actions) :
        # posts :
    created_posts = db.relationship('post')
    liked_posts = db.relationship('post' , secondary=liked_posts)
    disliked_posts = db.relationship('post' , secondary=disliked_posts)
    saved_posts = db.relationship('post' , secondary=saved_posts)
    hidden_posts  = db.relationship('post' , secondary=hidden_posts)
    reported_posts  = db.relationship('post' , secondary=reported_posts)

        # comments :
    created_comments = db.relationship('comment')
    liked_comments = db.relationship('comment' , secondary = liked_comments)
    disliked_comments = db.relationship('comment' , secondary = disliked_comments)

        # messages :
    # messages = db.relationship('message')

class post(db.Model) :
    id = db.Column(db.Integer , primary_key = True)

    # general info :
    auther = db.Column(db.Integer , db.ForeignKey('user.id'))
    content = db.Column(db.String(2000))
    media_files = db.relationship('media')
    created_time = db.Column(db.DateTime , default = datetime.now())

    # additional info 
    is_public = db.Column(db.Boolean  , default = True) # true => public , false => private
    edited = db.Column(db.Boolean , default = False)
    situation = db.Column(db.String(1) , default = 'n') # s : solved , w : working on it , n : not solved

    # post relations :
    comments = db.relationship('comment')
    likers = db.relationship('user' , secondary=liked_posts , overlaps="liked_posts")
    dislikers = db.relationship('user' , secondary=disliked_posts , overlaps="disliked_posts")
    savers = db.relationship('user' , secondary=saved_posts , overlaps="saved_posts")
    reporters = db.relationship('user' , secondary=reported_posts , overlaps="reported_posts")
    hidders = db.relationship('user' , secondary=hidden_posts , overlaps="hidden_posts")

class comment(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    auther = db.Column(db.Integer , db.ForeignKey('user.id'))
    content = db.Column(db.String(500))
    media_files = db.relationship('media')
    parent_post = db.Column(db.Integer , db.ForeignKey('post.id'))
    created_time = db.Column(db.DateTime , default = datetime.now() )

    # comment relations :
    likers = db.relationship('user' , secondary=liked_comments , overlaps="liked_comments")
    dislikers = db.relationship('user' , secondary=disliked_comments , overlaps="disliked_comments")

    # does not work yet
    # replies = db.relationship('comment')
    # parent_comment = db.Column(db.Integer , db.ForeignKey('comment.id'))
    

class media(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    file_path = db.Column(db.String(200))
    file_size = db.Column(db.Integer)
    file_type = db.Column(db.String(1)) # a => audio , v => video , i => image
    post_id = db.Column(db.Integer , db.ForeignKey('post.id'))
    comment_id = db.Column(db.Integer , db.ForeignKey('comment.id'))

class message(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    # sender = db.Column(db.Integer , db.ForeignKey('user.id'))
    # reciever = db.Column(db.Integer , db.ForeignKey('user.id'))
    content = db.Column(db.String(500))
    created_time = db.Column(db.DateTime)
    # media_files = db.relationship('media')
    # like_users = db.relationship('user')
    # dislike_users = db.relationship('user')

class shortcuts(db.Model) :
    id = db.Column(db.Integer , primary_key = True)
    default_url = db.Column(db.String(200))
    short_url = db.Column(db.String(50))

# class reported_posts(db.Model) :
#     id = db.Column(db.Integer , primary_key = True)
#     post_id = db.Column(db.Integer , db.ForeignKey('post.id'))
#     report_count = db.Column(db.Integer , default = 0)

