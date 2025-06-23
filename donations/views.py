from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class DonationsView(TemplateView):
    template_name = 'donations/donations.html'
