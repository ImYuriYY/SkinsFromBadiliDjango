# Generated by Django 5.0 on 2023-12-14 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteapp', '0004_alter_product_options_alter_product_backimg_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='backIMG',
            field=models.ImageField(upload_to='products'),
        ),
        migrations.AlterField(
            model_name='product',
            name='frontIMG',
            field=models.ImageField(upload_to='products'),
        ),
    ]
