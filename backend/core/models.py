from django.db import models

# Create your models here.


class Category(models.Model):
    id = models.AutoField(
        primary_key=True,
        null=False,
        db_column='id'
    )
    name = models.CharField(
        max_length=128,
        null=False,
        db_column='tx_name'
    )

    class Meta:
        db_table='category'
        managed=True


class Product(models.Model):
    id = models.AutoField(
        primary_key=True,
        null=False,
        db_column='id'
    )
    name = models.CharField(
        max_length=60,
        null=False,
        db_column='tx_name'
    )
    category = models.ForeignKey(
        to='Product',
        on_delete=models.DO_NOTHING,
        db_column='id_category',
        null=False,
        related_name='products'
    )
    price = models.DecimalField(
        null=False,
        max_digits=10,
        decimal_places=2,
        db_column='price'
    )
    serie = models.IntegerField(
        null=False,
        unique=True,
        db_column='serie'
    )

    class Meta:
        db_table = 'product'
        managed = True
