from django.shortcuts import render, redirect
from .models import *
from .forms import *


def index(request):
    products = Product.objects.order_by('-price')
    return render(request, 'siteapp/index.html', context={'products': products})



def productManagement(request):
    products = Product.objects.order_by('-price')
    return render(request, 'siteapp/productManagement.html', context={'products': products})


def create(request):
    if request.method == 'POST':
        form = AddProduct(request.POST, request.FILES)
        if form.is_valid():
            form.save()

            return redirect('homepage')
        else:
            return redirect('productManagement')
        
        
    else:
        form = AddProduct()
        return render(request, 'siteapp/create.html', context={'form': form})




def delete(request, id):
    try:
        delProduct = Product.objects.get(pk=id)
        delProduct.delete()
        return redirect('homepage')
    except:
        return redirect('create')




