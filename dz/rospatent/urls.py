from django.urls import path
from rospatent import views

app_name = "articles"
# app_name will help us do a reverse look-up latter.

urlpatterns = [
    path('rospatent/<str:pk>/', views.rospatent_links),
]