from django import forms
from .models import Comment

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['user_comment']
        widgets = {
            'user_comment': forms.Textarea(
                attrs={
                    'class': 'form-control p-3',
                    'placeholder': 'Enter your comment here',
                    'rows': 8,
                    'minlength': 10,
                    'maxlength': 300
                }
            )
        }
    
    def clean_user_comment(self):
        comment = self.cleaned_data.get('user_comment', '')
        if len(comment) < 10:
            raise forms.ValidationError("Comment must be at least 10 characters.")
        if len(comment) > 300:
            raise forms.ValidationError("Comment must be no more than 300 characters.")
        return comment
