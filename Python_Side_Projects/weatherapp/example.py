# let var = 0

num = 0
string = ""
boolean = True


def myFunction(num):
    global num
    return num


print(myFunction(1))
