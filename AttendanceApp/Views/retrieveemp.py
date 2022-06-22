from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import jwt, datetime
from AttendanceApp.models import Employee
from AttendanceApp.serializers import EmployeeShowSerializer



class RetriveEmp(APIView):
    @csrf_exempt
    def get(self, request):
          emp = Employee.objects.all()
          serializer=EmployeeShowSerializer(emp,many=True)
          return Response(serializer.data)

class EmployeeEditView(APIView):

    @csrf_exempt
    def put(self, request,*args, **kwargs):
        data=request.data        
        user = Employee.objects.get( id =data["id"])
        user.name=data["name"]
        user.mobile=data["mobile"]
        user.designation=data["designation"]
        user.address=data["address"]
        #user=data
        user.save() 
        return Response("Updated Successfully")