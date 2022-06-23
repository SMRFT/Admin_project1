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

#Compreface

from tkinter import Y
from compreface import CompreFace
from compreface.service import RecognitionService
from compreface.collections import FaceCollection
from compreface.collections.face_collections import Subjects
from django.http import JsonResponse


DOMAIN: str = 'http://localhost'
PORT: str = '8000'
API_KEY: str = '54cc82e7-9a68-4676-bb75-a3315748598c'

#API_KEY: str = 'da1647cc-856c-4c77-9aa2-0b221cea2754'

compre_face: CompreFace = CompreFace(DOMAIN, PORT)

recognition: RecognitionService = compre_face.init_face_recognition(API_KEY)

face_collection: FaceCollection = recognition.get_face_collection()

subjects: Subjects = recognition.get_subjects()



class EmployeeView(APIView):
    @csrf_exempt
    def post(self, request):
        imp="D:\\User_G\\Applications\\Attendance_management\\Images\\"
        data=request.data        
        face_collection.add(image_path=imp+data["userimgname"], subject=data["name"])
        serializer = EmployeeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save() #saving User profile
        return Response("New Employee Has Been Added Successfully")






