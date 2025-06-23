from django.urls import path
from . import views

urlpatterns = [
    path('', views.DonationsView.as_view(), name='donations')
]
