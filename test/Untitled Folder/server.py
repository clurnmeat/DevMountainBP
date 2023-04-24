from flask import Flask, render_template
import requests

app = Flask(__name__)



@app.route("/")
def home():
    return render_template("index.html")


@app.route("/guess/<name>")
def guess(name):
    params = {
        "name":name
        }
    age_response = requests.get(url="https://api.agify.io/", params=params).json()
    age = age_response["age"]
    gender_response = requests.get(url="https://api.genderize.io/", params=params).json()
    gender = gender_response["gender"]
    return render_template("index.html", age=age, gender=gender, name=name)


@app.route("/blog/<num>")
def get_blog(num):
    blog_url = "https://api.npoint.io/ba6cd38dc7683e4bb9cf"
    response = requests.get(blog_url)
    all_posts = response.json()
    return render_template("blog.html", posts=all_posts)


if __name__ == "__main__":
    app.run(debug=True)

    