from curses.ascii import EM
from rest_framework import serializers
from AttendanceApp.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=('id','name','mobile','designation','address','userimage')