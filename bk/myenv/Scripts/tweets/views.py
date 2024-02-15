from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home_views(req ,*args,**kwargs):
    S = "<h1>hello from home views </h1> "
    return HttpResponse("<h1>hello from home views </h1>"); 
    