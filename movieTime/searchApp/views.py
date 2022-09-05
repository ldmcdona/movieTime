from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import savedMovie
from .serializers import savedMovieSerializer, addSavedMovieSerializer

class savedMovieView(generics.ListAPIView):
    queryset = savedMovie.objects.all()
    serializer_class = savedMovieSerializer

class getSavedMovie(APIView):
    serializer_class = savedMovieSerializer
    lookup_url_kwarg = 'userid'

    def get(self, request, format=None):
        userid = int(request.GET.get(self.lookup_url_kwarg))
        if userid != None:
            movies = savedMovie.objects.filter(userid=1)
            data = savedMovieSerializer(movies[0]).data
            return Response(data, status=status.HTTP_200_OK)
        return Response({'User Not Found': 'Invalid User Id.'}, status=status.HTTP_404_NOT_FOUND)

# Create your views here.
class addSavedMovieView(APIView):
    serializer_class = addSavedMovieSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            imdbid = serializer.data.get('imdbid')
            queryset = savedMovie.objects.filter(userid=1)
            if queryset.count < 5:
                movie = savedMovie(userid=1, imdbid=imdbid, title=title)
                movie.save()
                return Response({'Success': 'Success'}, status=status.HTTP_202_ACCEPTED)
            else :
                return Response({'Limit Reached': 'User already has 5 movies'},status=status.HTTP_304_NOT_MODIFIED)
        else:
            return Response({'Error': request.data}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
