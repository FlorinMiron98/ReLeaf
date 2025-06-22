from django.urls import path
from . import views

urlpatterns = [
    path('', views.AllPostsView.as_view(), name='all-posts'),
    path('<slug:slug>', views.SinglePostView.as_view(), name='single-post')
]
