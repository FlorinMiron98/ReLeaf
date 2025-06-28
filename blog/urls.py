from django.urls import path
from . import views

urlpatterns = [
    path('', views.AllPostsView.as_view(), name='all-posts'),
    path('<slug:slug>', views.SinglePostView.as_view(), name='single-post'),
    path('comments/<int:pk>/edit/', views.CommentUpdateView.as_view(), name='comment-update'),
    path('comments/<int:pk>/delete/', views.CommentDeleteView.as_view(), name='comment-delete')
]
