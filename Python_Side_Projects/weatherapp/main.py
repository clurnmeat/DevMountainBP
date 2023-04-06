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
    weather_num = tk.Label(text=weather, font=("Arial", 45))
    weather_num.grid(row=2, column=0, padx=65, pady=125, columnspan=4)
    return


# Search Button
searchbutton = tk.Button(text="Search", height=2, command=get_weather)
searchbutton.grid(row=0, column=1)

# Search Bar
searchbar = tk.Text(height=1, font=("Arial", 25), width=12, )
searchbar.grid(row=0, column=0, )


screen.mainloop()
