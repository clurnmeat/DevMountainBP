import tkinter as tk
from urllib.parse import urlencode
import requests
from PIL import Image, ImageTk

# Constants
GEOLOCATOR = "http://api.openweathermap.org/geo/1.0/direct"
API = "https://api.openweathermap.org/data/2.5/weather"
APIKEY = "eb386d51eb16c1f5ca4e882a58bee4ca"

# Function to retrieve weather information
def get_weather_info(lat, lon):
    # Encoding the input parameters with API key and units of measurement
    params = urlencode({
        "lat": lat,
        "lon": lon,
        "appid": APIKEY,
        "units": "imperial"
    })

    try:
        # Sending a GET request using requests library
        response = requests.get(API, params=params).json()
    except (requests.exceptions.RequestException, ValueError) as e:
        # If GET request returns an exception, raise an error with a customized message
        raise Exception(f"An error occurred while retrieving weather data: {e}")

    return response["main"]["temp"]

# Function to retrieve location data
def get_location(inp):
    # Encoding the input parameters with API key
    params = urlencode({
        "q": inp,
        "appid": APIKEY,
        "limit": 3
    })

    try:
        # Sending a GET request using requests library
        location = requests.get(url=GEOLOCATOR, params=params).json()
    except (requests.exceptions.RequestException, ValueError) as e:
        # If GET request returns an exception, raise an error with a customized message
        raise Exception(f"An error occurred while retrieving location data: {e}")

    if not location:
        # If no location data is found, raise an error with a customized message
        raise Exception(f"No location data found for input: {inp}")

    return (location[0]["lat"], location[0]["lon"])

# Function to update the User Interface with new weather information
def update_ui(weather):
    # Updating label with new temperature value
    weather_num.config(text=weather)

    # Displaying appropriate weather image based on temperature range
    if weather >= 60 and weather <= 75:
        img = Image.open("images/cloudy-day.png")
        img = img.resize((150, 150), Image.ANTIALIAS)
        cloudy_day = ImageTk.PhotoImage(img)
        image.config(image=cloudy_day)
        image.image = cloudy_day

# Main function to retrieve weather
def get_weather():
    # Retrieving input from the search bar and calling the get_location and get_weather_info functions
    inp = search_bar.get(1.0, "end-1c")
    try:
        lat, lon = get_location(inp)
        weather = get_weather_info(lat, lon)

        # Updating UI with new weather information
        update_ui(weather)
    except Exception as e:
        # Displaying error messages if any exceptions occur
        error_label.config(text=str(e))

# Creating main screen and setting its title, dimensions and icon
screen = tk.Tk()
screen.geometry("400x250")
screen.title("Weather App")
screen.resizable(False, False)

appico = tk.PhotoImage(file="images/appico.png")
screen.iconphoto(False, appico)

# Creating a search button and grid layout for it
search_button = tk.Button(text="Search", height=2, command=get_weather)
search_button.grid(row=0, column=1)

# Creating a search bar and grid layout for it
search_bar = tk.Text(height=1, font=("Arial", 28), width=12)
search_bar.grid(row=0, column=0)

# Creating a label for displaying temperature and grid layout for it
weather_num = tk.Label(font=("Arial", 45), relief="flat")
weather_num.grid(row=2, column=0, rowspan=4, pady=80)

# Creating a label for displaying error messages and grid layout for it
error_label = tk.Label()
error_label.grid(row=2, column=1, rowspan=4)

# Creating a label for displaying background image and grid layout for it
background = ImageTk.PhotoImage(Image.open("images/background.png"))
image = tk.Label(screen, image=background)
image.grid(row=5, column=0, rowspan=8, columnspan=8)

# Running main screen
screen.mainloop()
