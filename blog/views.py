from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.contrib import messages
from django.http import JsonResponse
from django.views.generic.edit import FormMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import DetailView, ListView
from django.views import View
from .models import Post, Comment
from .forms import CommentForm
import json

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

        if len(context['comments']) > 0:
            context['has_comments'] = True
        else:
            context['has_comments'] = False

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
        messages.success(self.request, 'Comment added successfully.')
        return super().form_valid(form)

class CommentUpdateView(LoginRequiredMixin, View):
    def post(self, request, pk, *args, **kwargs):
        comment = get_object_or_404(Comment, pk=pk)

        if comment.author != request.user:
            return JsonResponse(
                {"error": "You are not allowed to edit this comment."},
                status=403
            )
        
        data = json.loads(request.body)
        comment_text = data.get("user_comment", "").strip()

        if len(comment_text) < 10 or len(comment_text) > 300:
            return JsonResponse(
                {"error": "Comment must be between 10 and 300 characters"},
                status=400
            )
        
        comment.user_comment = comment_text
        comment.save()

        return JsonResponse({
            "user_comment": comment.user_comment,
            'comment_id': comment.id,
            'message': 'Comment updated successfully.'
        })
        
