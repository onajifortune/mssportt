from django.contrib import admin
from home.models import MssportName, MssportOther

# Register your models here.
@admin.register(MssportName)
class MssportNameAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(MssportOther)
class MssportOtherAdmin(admin.ModelAdmin):
    list_display = ['phone', 'password',]