from django.shortcuts import render
from django.views.generic.edit import FormView
from django.views.generic import TemplateView

# Create your views here.

class RegisterView(TemplateView):
    template_name = 'accounts/register.html'
