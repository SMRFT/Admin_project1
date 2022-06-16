from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import jwt, datetime
from AttendanceApp.models import Employee
from AttendanceApp.serializers import EmployeeSerializer
from PIL import Image
import io


#django file storage




"""
class EmployeeView(APIView):
    @csrf_exempt
    def post(self, request):
        #image=open(request.data['img'],'rb')
        #im = Image.open(request.data['img'])
        #image_bytes = io.BytesIO()
        #im.save(image_bytes, format='JPEG')

        #request.data['img']=image_bytes.getvalue()
        
        serializer = EmployeeSerializer(data=request.data)
        #print(serializer)
        #serializer.img.replace(image,filename=serializer.id)
        serializer.is_valid(raise_exception=True)
        serializer.save() #saving User profile
        return Response(serializer.data)
"""
"""
class EmployeeView(APIView):
    @csrf_exempt
    def post(self, request):
        im = Image.open(request.data['img'])
        image_bytes = io.BytesIO()
        im.save(image_bytes, format='JPEG')
        request.data['img']=image_bytes.getvalue()
        serializer = EmployeeSerializer(data=request.data)
        print(request.data['img'])
        serializer.is_valid(raise_exception=True)
        serializer.save() #saving User profile
        return Response(serializer.data)

"""
import os, os.path

class EmployeeView(APIView):
    @csrf_exempt
    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save() #saving User profile
        return Response("New Employee Has Been Added Successfully")




