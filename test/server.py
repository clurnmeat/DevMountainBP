from flask import Flask, render_template
import random
import datetime
app = Flask(__name__)

@app.route("/")
def home():
    # adding variable for jinja framework.
    random_number = random.randint(1, 10)
    year = datetime.date.today()
    year_update = year.isoformat()
    # returns **kwargs that I create to be used in index html
    return render_template("index.html", num=random_number, year=year_update[0:4])


if __name__ == "__main__":
    app.run(debug=True)