from django.db import models

# Create your models here.

class MssportName(models.Model):
    name = models.CharField(max_length=500)
    
class MssportOther(models.Model):
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=500)