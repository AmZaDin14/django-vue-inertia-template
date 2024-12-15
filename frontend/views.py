from inertia import render


# Create your views here.
def index(request):
    return render(request, "Index", props={"name": "Index"})
