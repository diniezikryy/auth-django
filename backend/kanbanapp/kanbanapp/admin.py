from django.contrib import admin

# Register your models here.
from .models import Board, Column, Task, Subtask

admin.site.register(Board)
admin.site.register(Column)
admin.site.register(Task)
admin.site.register(Subtask)
