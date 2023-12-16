from django import forms
from .models import *


class AddProduct(forms.ModelForm):
    frontIMG = forms.ImageField(
        widget=forms.FileInput(
            attrs= {
                'id': 'frontImageInput',
                'name': 'frontIMGuploaded'
            }
        )
    )
    backIMG = forms.ImageField(
        widget=forms.FileInput(
            attrs= {
                'id': 'backImageInput',
                'name': 'backIMGuploaded'
            }
        )
    )



    title = forms.CharField(max_length=20,
        widget=forms.TextInput(
            attrs={
                'id': 'previewProductNameInput',
                'placeholder': 'Name'
            }
        )             
    )
    description = forms.CharField(max_length=100,
        widget=forms.TextInput(
            attrs={
                'id': 'previewProductDescriptionInput',
                'placeholder': 'Description'
            }
        ) 
    )
    price = forms.FloatField(
        widget=forms.NumberInput (
            attrs={
                'id': 'previewProductPriceInput',
                'placeholder': 'Price'
            }
        ) 
    )
    class Meta:
        model = Product
        fields = ('frontIMG', 'backIMG', 'title', 'description', 'price')



