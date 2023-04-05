import tkinter as tk
import requests


GEOLOCATOR = "http://api.openweathermap.org/geo/1.0/direct"
API = "https://api.openweathermap.org/data/2.5/weather"
APIKEY = "eb386d51eb16c1f5ca4e882a58bee4ca"


# Screen
screen = tk.Tk()
screen.geometry("300x400")
screen.title("Weather App")
screen.resizable(False, False)
photo = tk.PhotoImage(
    file="Python_Side_Projects/weatherapp/7607342.png")
screen.iconphoto(False, photo)

# Weather Info
city_name = tk.Text(screen)
city_name.pack()


params = {
    "q": city_name,
    "appid": APIKEY,
    "limit": 3
}


location = requests.get(url=GEOLOCATOR, params=params).json()


screen.mainloop()
