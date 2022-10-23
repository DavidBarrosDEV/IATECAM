from rest_framework.routers import DefaultRouter
from core import viewsets

router = DefaultRouter()

router.register('product', viewsets.ProductViewSet)
router.register('category', viewsets.CategoryViewSet)

urlpatterns = router.urls