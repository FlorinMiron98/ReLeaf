import stripe
import json
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
from django.http import JsonResponse
from django.conf import settings
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Create your views here.

class DonationsView(TemplateView):
    template_name = 'donations/donations.html'

@method_decorator(csrf_exempt, name='dispatch')
class CreateCheckoutSessionView(View):
    stripe.api_key = settings.STRIPE_PRIVATE_KEY

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        amount = int(data['amount'])
        description = ''

        if amount <= 5:
            description = "You're planting a tree and starting something big. Even the smallest seed grows into a forest—thank you!"
        elif amount <= 10:
            description = "A small grove begins! Your donation will plant multiple trees and help restore natural habitats."
        elif amount <= 25:
            description = "You're planting a mini forest. Your support is growing roots that will last for generations - thank you!"
        elif amount <= 50:
            description = "With this generous gift, you're planting dozens of trees and making a real impact on reforestation efforts."
        elif amount <= 100:
            description = "This donation goes a long way - you're helping entire ecosystems recover and thrive. Incredible work!"
        elif amount <= 250:
            description = "Your support is creating a true forest. This level of generosity drives major change for our planet's future."

        try:
            session = stripe.checkout.Session.create(
                line_items=[{
                    'price_data': {
                        'currency': 'gbp',
                        'product_data': {
                            'name': 'Tree of Hope',
                            'images': ['https://cdn.pixabay.com/photo/2022/09/20/20/16/oak-7468708_1280.jpg'],
                            'description': description
                        },
                        'unit_amount': amount * 100,
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url=request.build_absolute_uri(reverse('donation-success')) + '?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=request.build_absolute_uri(reverse('donation-fail'))
            )
            return JsonResponse({
                'id': session.id,
                'stripePublicKey': settings.STRIPE_PUBLIC_KEY
            })
        except Exception as e:
            return JsonResponse({'error': str(e), 'amount_value': amount}, status=400)

class DonationSuccessView(TemplateView):
    template_name = 'donations/donation-success.html'

class DonationFailView(TemplateView):
    template_name = 'donations/donation-fail.html'
