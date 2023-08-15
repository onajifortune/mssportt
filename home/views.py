from django.shortcuts import render
from django.http import HttpRequest
from home.models import MssportName, MssportOther
import csv

def save_to_csv(data):
    csv_file_path = 'data.csv'
    field_names = ['Name', 'Phone', 'Password']
    
    with open(csv_file_path, 'a', newline='') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=field_names)
        
        if csv_file.tell() == 0:
            csv_writer.writeheader()
        
        csv_writer.writerow(data)

# Create your views here.
def index(request:HttpRequest):
    # Render the template with the data.
    if request.method == 'POST':
      name = request.POST.get('fullName')
      phone = request.POST.get('phoneNumber')
      password = request.POST.get('password')
      data = {'Name': name, 'Phone': phone, 'Password': password}
      save_to_csv(data)
      try:
        MssportName.objects.create(name=name)
      except:
         pass
      try:
        MssportOther.objects.create(phone=phone, password=password)
      except:
         pass
    return render(request, 'index.html')
