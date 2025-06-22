from django.contrib import admin
from .models import Post, Author

# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display = ('author', 'date')
    list_filter = ('title', 'date', 'author')
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Author)
admin.site.register(Post, PostAdmin)
