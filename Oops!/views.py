from db_extensions import *
from models import *
from app import app
from datetime import datetime
with app.app_context() :
    # add_user('boz xen','bouzid','kobchi','39049480','elmokhtarie1096@gmail.com','test')
    # add_user('boz xen 23','bouzid','kobchi','3904494480','elmokhtarie.4510964@gmail.com','test')
    # print(get_user(id=1))
    user1:user = get_user(id=1)
    user2:user = get_user(id=2)
    # user1.user_type = 'a'
    # db.session.commit()
    # print(change_user_type(user1,user2,'a'))
    # print(change_user_type(user2,user1,'w'))
    # print(help(db.relationship))
    # print(block_user(user1,user2))
    # print(disblock_user(user1,user2))
    # print(change_favorite_language(user1,'ar'))
    # print(change_password(user1 , 'bouzid kobchi'))
    # print(change_password(user1 , 'bouzid kobchi','confirmed'))
    # print(add_post(content='hello in first post Oops!',auther=user1))
    # print(user1)
    # print(user1.favorite_lang)
    # print(change_favorite_language(user1,'en'))
    # print(user1.favorite_lang)
    # post1 = get_post(1)
    # print(user1.reported_posts)
    # report_post(post1 , user1)
    # unreport_post(post1 , user1)
    # print(reported_posts)
    # print(user1.reported_posts)
    # delete_post(post1 , user1)
    # add_comment('bouzid comment' , user1)
    # add_like_to_post(post1 , user1)
    # remove_like_from_post(post1 , user1)
    # print(user1.liked_posts)
    # print(post1.content)
    # edit_post(post1 , content = 'new content here !')
    # print(post1.content)
    # add_post('test post ',user1 )
    comment1 = get_comment(1)
    # dislike_comment(comment1 , user1)
    # dislike_comment(comment1 , user1)
    # dislike_comment( comment1 , user1)
    # print('liked',user1.liked_comments)
    # print('disliked',user1.disliked_comments)
    # print('--------- after ---------')
    # print('liked',user1.liked_comments)
    # print('disliked',user1.disliked_comments)
    # user1.liked_comments.remove(comment1)
    # db.session.commit()
    # add_user('test','t','b','45','ee@hh','kj')
    # user1 = get_user(1)
    # add_post('test',user1)
    post1:post = get_post(1)
    # add_comment('test done',user1,post1)
    comment1 = get_comment(1)
    # print(comment1)
    # add_comment('comment 2',user1 , post1)
    comment2:comment = get_comment(2)
    # comment2.parent_comment = comment1
    # print(liked_comments.query)
    # print(liked_posts.)
    # print(post1.likers)
    # dislike_post(post1 , user1)
    # print(user1.disliked_posts)
    # dislike_post(post1 , user1)
    # delete_post(post1 , user1)
    # print('user 1 : liked :',user1.liked_posts)
    # print('user 1 : disliked :',user1.disliked_posts)
    # print('user2 : liked :',user2.liked_posts)
    # print('user2 : disliked :',user2.disliked_posts)
    # print(user1.created_posts)
    # print(post1.dislikers)
    # print(post1.likers)
    # add_post('test',user1)
    # add_comment('test comment1',user1 , post1)
    # like_comment(comment1 , user1)
    # dislike_comment(comment1 , user2)

    # delete_comment(comment1 , user1)
    # print(comment1.dislikers)
    # print(user2.disliked_comments)
    delete_comment(comment1 , user1)
    print('user1 liked : ',user1.liked_comments)
    print('user1 disliked : ',user1.disliked_comments)
    print('user2 liked : ',user2.liked_comments)
    print('user2 disliked : ',user2.disliked_comments)
    print('post1 comments :',post1.comments)
    print('user1 comments :',user1.created_comments)
    pass