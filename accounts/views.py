from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import CustomRegisterForm
from django.contrib.auth import login
from django.contrib import messages
from django.urls import reverse_lazy
from django.shortcuts import redirect

# Create your views here.

class RegisterView(FormView):
    template_name = 'accounts/register.html'
    form_class = CustomRegisterForm
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        user = form.save()
        login(self.request, user=user)
        messages.success(self.request, 'Registration successful. Welcome!')
        return super().form_valid(form)
