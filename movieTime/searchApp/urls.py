from django.urls import path
from .views import savedMovieView, getSavedMovie, addSavedMovieView

urlpatterns = [
    path('home', savedMovieView.as_view()),
    path('get-movies', getSavedMovie.as_view()),
    path('add-movie', addSavedMovieView.as_view())
]