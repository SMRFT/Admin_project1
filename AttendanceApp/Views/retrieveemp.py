from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import jwt, datetime
from AttendanceApp.models import Employee
from AttendanceApp.serializers import EmployeeSerializer



class RetriveEmp(APIView):
    @csrf_exempt
    def get(self, request):
          user = Employee.objects.get(id=17)
          #emp = Employee.objects.all()
          print(user.img)
          serializer=EmployeeSerializer(user)#,many=True)
          return Response(serializer.data)