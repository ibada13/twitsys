from .models import Tweet
from django.shortcuts import render
from django.http import HttpResponse,Http404,JsonResponse
def home(req,*args,**kwargs):
    return HttpResponse(f"<h1>hello from home </h1>"); 
    
def tweet(req ,tid,*args,**kwargs):
    data = {
        "id":tid,
    }
    status= 200
    try:
        obj = Tweet.objects.get(id=tid)
        data['content'] = obj.content
        data['likes'] = obj.likes
    except:
        data['message'] = "dosn't exist"
        status = 404
    return JsonResponse(data,status=status)

def tweet_List(req,*args,**kwargs):
    qs = Tweet.objects.all();
    tweet_List = [{"id":x.id,"content":x.content,"likes":x.likes} for x in qs]
    data={
        "tweets":tweet_List
    }
    return JsonResponse(data,status=200,safe=False)