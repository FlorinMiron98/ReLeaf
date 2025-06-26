from django.shortcuts import render
from django.views.generic.edit import FormMixin 
from django.views.generic import DetailView, ListView
from django.urls import reverse
from .models import Post
from .forms import CommentForm

# Create your views here.

class AllPostsView(ListView):
    template_name = 'blog/all-posts.html'
    model = Post
    ordering = ['-date']
    context_object_name = 'all_posts'

class SinglePostView(FormMixin, DetailView):
    model = Post
    template_name = 'blog/single-post.html'
    context_object_name = 'post'
    form_class = CommentForm
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

    def get_success_url(self):
        return reverse('single-post', kwargs={'slug': self.object.slug})

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['comments'] = self.object.comments.all()
        if 'form' not in context:
            context['form'] = self.get_form()
        return context
    
    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def form_valid(self, form):
        comment = form.save(commit=False)
        comment.post = self.object
        comment.author = self.request.user
        comment.save()
        return super().form_valid(form)
