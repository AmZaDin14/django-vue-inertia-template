from inertia import inertia


# Create your views here.
@inertia("Index")
def index(request):
    return {"name": "Index"}
