import tkinter as tk

import requests
from PIL import Image, ImageTk

GEOLOCATOR = "http://api.openweathermap.org/geo/1.0/direct"
API = "https://api.openweathermap.org/data/2.5/weather"
APIKEY = "eb386d51eb16c1f5ca4e882a58bee4ca"


# Screen
screen = tk.Tk()
screen.geometry("400x250")
screen.title("Weather App")
screen.resizable(False, False)
background = ImageTk.PhotoImage(Image.open(
    "images/background.png"))
image = tk.Label(screen, image=background)
image.grid(row=5, column=0, rowspan=8, columnspan=8)
appico = tk.PhotoImage(
    file="images/appico.png")
screen.iconphoto(False, appico)
# Weather Info


def get_input():
    inp = searchbar.get(1.0, "end-1c")
    params = {
        "q": inp,
        "appid": APIKEY,
        "limit": 3
    }

    try:
        location = requests.get(url=GEOLOCATOR, params=params).json()
    except (requests.exceptions.RequestException, ValueError):
        print("An error occurred while retrieving location data.")
        return None

    if location:
        return (location[0]["lat"], location[0]["lon"])
    else:
        
        print("No location data found for input: " + inp)
        return None
        


def get_weather():
    try:
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
    except:
        error_label = tk.Label(text='Error!! Enter a new location. {location_info} is not a location in our database.')
        error_label.grid(row=2, column=1, rowspan=4,)
    
    if int(weather) >= 60 <= 75:
        cloudy_day = tk.PhotoImage()(
            image="images/cloudy-day.png", )
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
