from rest_framework import serializers
from core import models


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(read_only=True, source='category')
    class Meta:
        model = models.Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'