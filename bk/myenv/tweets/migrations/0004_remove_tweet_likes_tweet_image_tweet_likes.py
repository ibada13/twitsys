# Generated by Django 5.0.1 on 2024-02-17 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0003_remove_tweet_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tweet',
            name='Likes',
        ),
        migrations.AddField(
            model_name='tweet',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AddField(
            model_name='tweet',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]
