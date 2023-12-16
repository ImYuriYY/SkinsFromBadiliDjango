from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index, name='homepage'),
    path('productManagement/', productManagement, name='productManagement'),
    path('create/', create, name='create'),
    path('delete/<int:id>', delete, name='delete')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)