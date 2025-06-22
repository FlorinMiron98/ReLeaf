from django.shortcuts import render
from django.views import View
from django.views.generic import ListView
from .models import Post

# Create your views here.

class AllPostsView(ListView):
    template_name = 'blog/all-posts.html'
    model = Post
    ordering = ['-date']
    context_object_name = 'all_posts'

class SinglePostView(View):
    def get(self, request, slug):
        post = Post.objects.get(slug=slug)

        return render(request, 'blog/single-post.html', {
            "post": post
        })
