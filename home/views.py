from django.shortcuts import render
from django.http import HttpRequest

# Create your views here.
def index(request:HttpRequest):
    # Render the template with the data.
    return render(request, 'index.html')
