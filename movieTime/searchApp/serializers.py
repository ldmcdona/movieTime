from rest_framework import serializers
from .models import savedMovie

class savedMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = savedMovie
        fields = (
            'userid',
            'imdbid', 
            'title', 
            'year', 
            'rating', 
            'release',
            'runtime',
            'genre',
            'director',
            'writer',
            'actors',
            'plot',
            'language',
            'country',
            'awards',
            'poster',
            'ratings',
            'metascore',
            'imdbRating',
            'imdbVotes',
            'type',
            'DVD',
            'boxoffice',
            'production',
            'website',
            'response')

class addSavedMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = savedMovie
        fields = (
            'userid', 
            'imdbid', 
            'title')