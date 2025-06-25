from django.shortcuts import render
from django.views import View
from django.views.generic.edit import FormView
from django.contrib.auth import login
from django.contrib.auth import logout
from django.contrib import messages
from django.urls import reverse_lazy
from django.shortcuts import redirect
from .forms import CustomRegisterForm

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

class LogoutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        messages.info(self.request, 'You have been logged out.')
        return redirect('home')

