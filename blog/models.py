from django.db import models
from django.contrib.auth.models import User

from django.core.validators import MinLengthValidator, MaxLengthValidator

# Create your models here.
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()

    def full_name(self):
        return f'{self.first_name} {self.last_name}'

    def __str__(self):
        return self.full_name()

class Post(models.Model):
    title = models.CharField(max_length=150)
    excerpt = models.CharField(max_length=300)
    date = models.DateField(auto_now=True)
    image = models.ImageField(upload_to='images', null=True)
    image_alt = models.CharField(max_length=255, default='No alt text provided')
    slug = models.SlugField(unique=True)
    admin_comment = models.TextField(validators=[MinLengthValidator(10)])
    author = models.ForeignKey(Author, null=True, on_delete=models.SET_NULL, related_name='posts')

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    user_comment = models.TextField(validators=[MinLengthValidator(10), MaxLengthValidator(300)])
    date = models.DateField(auto_now_add=True)

    def __str__(self) :
        return f"Comment by {self.author.username} on {self.post.title}"
