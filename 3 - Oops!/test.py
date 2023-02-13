def randomizer(text) :
    """make the text randomized"""
    text_list = [*text]

    # randomize function :
    _to = len(text_list) 
    _from = 1
    for i in range(_to) :
        for j in range(_from,_to,2) :
            # swap :
            t = text_list[j]
            text_list[j] = text_list[j-1]
            text_list[j-1] = t

        _to -= 1
        _from += 1

    # joined string :
    final_text = ''.join(text_list)

    return final_text

def unrandomizer(text) :
    """reversing the randomized text algorithme"""
    text_list = [*text]

    _to = len(text_list)//2 + 1
    _from = len(text_list)//2

    # unrandomize :
    for i in range(_to-1) :
        for j in range(_from,_to,2) :
            # swap :
            t = text_list[j]
            text_list[j] = text_list[j-1]
            text_list[j-1] = t

        _to += 1
        _from -= 1
    
    new_text = ''.join(text_list)

    return new_text

import datetime as dt

# def test() :
#     start = dt.datetime.now()
#     ten_seconds_after = dt.timedelta(seconds=5)
#     input('click before 5 seconds : ')
#     now = dt.datetime.now()
#     if now - start < ten_seconds_after :
#         print('you win')
#     else :
#         print('you lose')

# test()


# from cryptography.fernet import Fernet
 
# # we will be encrypting the below string.
# message = "hello geeks"
 
# # generate a key for encryption and decryption
# # You can use fernet to generate
# # the key or use random key generator
# # here I'm using fernet to generate key
 
# key = Fernet.generate_key()
 
# # Instance the Fernet class with the key
 
# fernet = Fernet(key)
 
# # then use the Fernet class instance
# # to encrypt the string string must
# # be encoded to byte string before encryption
# encMessage = fernet.encrypt(message.encode())
 
# print("original string: ", message)
# print("encrypted string: ", encMessage)
 
# # decrypt the encrypted string with the
# # Fernet instance of the key,
# # that was used for encrypting the string
# # encoded byte string is returned by decrypt method,
# # so decode it to string with decode methods
# decMessage = fernet.decrypt(encMessage).decode()
 
# print("decrypted string: ", decMessage)

# print(dt.datetime('2023-02-11 14:08:29.308237'))

# time = '2023-02-11 14:08:29.308237'
# time_obj = dt.datetime.strptime(time , '%Y-%m-%d %H:%M:%S.%f')

# def enc(string) :
#     my_dict = dict(zip('.0123456789-: ' , 'KoWqEpJyfAxNUc'))
#     new = ''
#     for i in string : new += my_dict[i]
#     return new

# def time_from_url(url) :
#     # url = test/<code>
#     pass

"""
'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0.123456789@:-' => 67 character
{ 'W5' , 'K6' , 'T1' , '00' , 'Pm' , '9L' , 'K9' , 'Df' , 'Vb' , 'Uc' , 'WW' , 'X2' , '44' , 'Ss' , 'Bq' , 'OI' , 'jk' , 'Px' , 'Aa' , 'iT' , 'vW' , '0M' , 'Gr' , 'Zn' , 'Ad' , '19' , 'O0' , 'o0' , '57' , 'Z3' , 'E2' , 'P1' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' }
"""
# print(len('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0.123456789@:-'))
# https://leetcode.com/accounts/password/reset/key/3m73y-set-password/

# from time import time as t
# a = t()
# s = randomizer('elmokhtarie1096@gmail.com++2023-02-11 14:08:29.308237').replace(' ','#').replace('@','?').replace(':','=')
# print(s)
# print(unrandomizer(s.replace('=',':').replace('?','@').replace('#',' ')))
# print(len('elmokhtarie1096@gmail.com++2023-02-11 14:08:29.308237')**2)
# print(t() - a)

# import requests

# print(requests.get('http://127.0.0.1:5000/show-headers' , headers = {
#     'session' : 'eyJwYXNzd29yZCI6InRlc3QyIn0.Y-lF5A.p1B3NjmklpXJu_wfjxYaYWXTR4I' ,
#     'csrftoken' : 'gjEi1oTCRStza1havsA4M70P3ka2nP5F'
# }).content)

print([1,2,3,4,78].count())