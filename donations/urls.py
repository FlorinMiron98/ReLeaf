from django.urls import path
from . import views

urlpatterns = [
    path('', views.DonationsView.as_view(), name='donations'),
    path('create-checkout-session/', views.CreateCheckoutSessionView.as_view(), name='create-checkout-session'),
    path('donation-success/', views.DonationSuccessView.as_view(), name='donation-success'),
    path('donation-fail/', views.DonationFailView.as_view(), name='donation-fail')
]
