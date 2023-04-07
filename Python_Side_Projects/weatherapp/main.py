import tkinter as tk
import requests
from PIL import ImageTk, Image

GEOLOCATOR = "http://api.openweathermap.org/geo/1.0/direct"
API = "https://api.openweathermap.org/data/2.5/weather"
APIKEY = "eb386d51eb16c1f5ca4e882a58bee4ca"


# Screen
screen = tk.Tk()
screen.geometry("400x250")
screen.title("Weather App")
screen.resizable(False, False)
background = ImageTk.PhotoImage(Image.open(
    "Python_Side_Projects/weatherapp/th-920371034.png"))
image = tk.Label(screen, image=background)
image.grid(row=5, column=0, rowspan=8, columnspan=8)
appico = tk.PhotoImage(
    file="Python_Side_Projects/weatherapp/7607342.png")
screen.iconphoto(False, appico)
# Weather Info


def get_input():
    inp = searchbar.get(1.0, "end-1c")
    params = {
        "q": inp,
        "appid": APIKEY,
        "limit": 3
    }

    location = requests.get(url=GEOLOCATOR, params=params).json()

    return (location[0]["lat"], location[0]["lon"])


def get_weather():
    location_info = get_input()
    params2 = {
        "lat": location_info[0],
        "lon": location_info[1],
        "appid": APIKEY,
        "units": "imperial"
    }
    # Weather Label
    response = requests.get(API, params=params2).json()
    weather = response["main"]["temp"]
    weather_num = tk.Label(text=weather, font=("Arial", 45), relief="flat")
    weather_num.grid(row=2, column=0,
                     rowspan=4, pady=80, )
    if int(weather) >= 60 <= 75:
        cloudy_day = tk.LabelFrame(
            image="Python_Side_Projects/weatherapp/Pictogrammers-Material-Weather-Weather-partly-cloudy.512.png", )
        cloudy_day.grid(row=3, column=0, rowspan=3, )
    # elif weather > 75:
    #     sunny_day = tk.Label(image=, )
    # else:
    #     host_day = tk.Label(image=)

    return


# Search Button
searchbutton = tk.Button(text="Search", height=2, command=get_weather)
searchbutton.grid(row=0, column=1)

# Search Bar
searchbar = tk.Text(height=1, font=("Arial", 28), width=12, )
# searchbar.config(yscrollcommand=)
searchbar.grid(row=0, column=0, )


screen.mainloop()
# TODO: Add design, maybe cool background, and graphic showing rain and sun and cloud?
