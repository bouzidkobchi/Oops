from shutil import make_archive
import os
import math

def convert_size(size_bytes):
   if size_bytes == 0:
       return "0B"
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size_bytes, 1024)))
   p = math.pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

def directory_size(path) :
    total_size = 0
    for root , dirs , files in os.walk(path) :
        for file in files :
            total_size += os.path.getsize(os.path.join(root , file))
    return total_size

def create_zip(folder =  os.path.dirname(__file__)) :
    arch = make_archive( os.path.join(os.path.dirname(__file__) , 'zipped') , 'zip' , folder)
    return arch

