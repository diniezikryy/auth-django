from django.db import models
from django.contrib.auth.models import User

class Board(models.Model):
    boardName = models.CharField(max_length=30, default="some_text")
    userId = models.ForeignKey(User, on_delete=models.CASCADE, default="")

    def __str__(self):
        return "Board: " + self.boardName + " belongs to user: " + str(self.userId)

class Column(models.Model):
    columnName = models.CharField(max_length=30, default="some_text")
    boardId = models.ForeignKey(Board, on_delete=models.CASCADE, default="")

class Task(models.Model):
    taskTitle = models.CharField(max_length=30, default="some_text")
    taskDescription = models.CharField(max_length=99, default="some_text")
    # task status must be given a choice based on the columns in the board
    taskStatus = models.CharField(max_length=30, default="some_text")
    columnId = models.ForeignKey(Column, on_delete=models.CASCADE, default="")

class Subtask(models.Model):
    subtaskTitle = models.CharField(max_length=30, default="some_text")
    isCompleted = models.BooleanField(default=False)
    taskId = models.ForeignKey(Task, on_delete=models.CASCADE, default="")
