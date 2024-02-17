from django.db import models

# Create your models here.
class Tweet(models.Model):
    content = models.TextField(blank=True , null =True)
    image = models.FileField(upload_to="images/",blank=True , null=True )
    Likes = models.ImageField(default=0)
#add to installed apps