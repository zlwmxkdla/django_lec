from django.shortcuts import render

# Create your views here.
def mainpage(request):
    return render(request,'pages/mainpage.html')

def MemberManagement(request):
    return render(request,'pages/MemberManagement.html')