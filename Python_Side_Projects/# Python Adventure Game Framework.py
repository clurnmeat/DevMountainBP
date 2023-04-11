# Python Adventure Game Framework

# Import necessary modules
import time

# Define a function to print text with a delay


def print_with_delay(text, delay=1):
    for char in text:
        print(char, end='', flush=True)
        time.sleep(delay)
    print()

# Define a function to get user input with a delay


def input_with_delay(prompt, delay=1):
    print_with_delay(prompt, delay)
    return input()

# Define a function to start the game


def start_game():
    print_with_delay("Welcome to the Adventure Game!")
    name = input_with_delay("What is your name? ")
    print_with_delay(f"Hello, {name}!")
    print_with_delay("You find yourself in a dark room.")
    print_with_delay("There are two doors in front of you.")
    door_choice = input_with_delay("Which door do you choose? (1 or 2) ")
    if door_choice == "1":
        print_with_delay("You enter a room with a treasure chest.")
        print_with_delay("Congratulations! You win!")
    elif door_choice == "2":
        print_with_delay("You enter a room with a monster.")
        print_with_delay("Game over.")
    else:
        print_with_delay("Invalid choice. Please try again.")
        start_game()

# Example code for adding a new room


def room_three():
    print_with_delay("You enter a room with a mysterious statue.")
    statue_choice = input_with_delay("Do you touch the statue? (y/n) ")
    if statue_choice == "y":
        print_with_delay("The statue comes to life and attacks you!")
        print_with_delay("Game over.")
    elif statue_choice == "n":
        print_with_delay("You notice a hidden door behind the statue.")
        print_with_delay("You open the door and find a treasure chest!")
        print_with_delay("Congratulations! You win!")
    else:
        print_with_delay("Invalid choice. Please try again.")
        room_three()


# Call the start_game function to begin the game
start_game()
