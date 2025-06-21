from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class AllPostsView(TemplateView):
    template_name = 'blog/all-posts.html'
