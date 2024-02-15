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
    except:
        data['message'] = "dosn't exist"
        status = 404
    return JsonResponse(data,status=status)


   