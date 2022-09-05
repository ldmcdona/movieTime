from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('saved', index),
    path('results', index)
]