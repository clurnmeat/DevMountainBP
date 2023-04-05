from tkinter import *
import requests


API = "https://api.openweathermap.org/data/3.0/onecall"

APIKEY = "eb386d51eb16c1f5ca4e882a58bee4ca"

# Screen
screen = Tk()
screen.geometry("300x400")
screen.title("Weather App")
screen.resizable(False, False)
screen.iconbitmap(
    'Python_Side_Projects/weatherapp/images/pythontutorial-1-150x150.ico')

screen.mainloop()
