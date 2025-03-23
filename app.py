from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

adjectives = ["Cool", "Happy", "Mighty", "Brave", "Swift"]
nouns = ["Tiger", "Dragon", "Falcon", "Lion", "Wolf"]

def generate_username():
    adj = random.choice(adjectives)
    noun = random.choice(nouns)
    number = random.randint(10, 99)
    return f"{adj}{noun}{number}"

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/generate', methods=['GET'])
def generate():
    return jsonify({"username": generate_username()})

if __name__ == '__main__':
    app.run(debug=True)
