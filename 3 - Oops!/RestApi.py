from datetime import datetime
from flask import Blueprint , request
from db_extensions import *
from models import *
from flask_login import current_user , login_required


Oops_api = Blueprint('Oops_api' , __name__)

class user_issues :
    @Oops_api.post('/add_post')
    @login_required
    def add_new_post() :
        content = request.json.get('content')
        is_public = request.json.get('is_public')
        situation = request.json.get('situation')

        add_post(content , current_user , is_public , situation )

        return {'situation':'done'}
    
    @Oops_api.get('/posts')
    def get_posts() :
        page = request.args.get('page' , 1 , type = int)
        per_page = request.args.get('per_page' , 1 , type = int)
        if True :
            return { f'post{post.id}':{
                    'id' : post.id ,
                    'auther' : post.auther ,
                    'content' : post.content ,
                    'media_files' : post.media_files ,
                    'created_time' : post.created_time ,
                    'is_public' : post.is_public ,
                    'edited' : post.edited ,
                    'situation' : post.situation ,
                    'first_comment' : post.comments[0] if post.comments else None ,
                    'likes' : len(post.likers) ,
                    'dislikes' : len(post.dislikers) ,

                    } for post in  Post.query.paginate(per_page = per_page , page = page)}
    
    @Oops_api.get('/comments')
    def get_comments() :
        post_id = request.args.get('post_id' , type = int)
        page = request.args.get('page', 1 , type = int)
        per_page = request.args.get('per_page', 1 , type = int)

        if post_id :
            return {
                f'comment{comment.id}' : {
                    'id' : comment.id ,
                    'auther' : comment.auther ,
                    'content' : comment.content ,
                    'media_files' : comment.media_files ,
                    'parent_post' : comment.parent_post ,
                    'created_time' : comment.created_time ,
                    'likes' : len(comment.likers) ,
                    'dislikes' : len(comment.dislikers) ,

                } for comment in get_post(post_id).comments[page*per_page:(page+1)*per_page]
            }
        return {}
    