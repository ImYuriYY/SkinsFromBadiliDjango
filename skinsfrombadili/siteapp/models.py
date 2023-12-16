from django.db import models

class Product(models.Model):
    frontIMG = models.ImageField(upload_to='products')
    backIMG = models.ImageField(upload_to='products')
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    price = models.IntegerField()


    def __str__(self):
        return f'{self.title}'
    


    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'