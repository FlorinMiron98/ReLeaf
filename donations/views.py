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

        try:
            session = stripe.checkout.Session.create(
                line_items=[{
                    'price_data': {
                        'currency': 'gbp',
                        'product_data': {
                            'name': 'Tree of Hope'
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
