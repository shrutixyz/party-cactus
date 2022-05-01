from flask import Flask, redirect, render_template, request



app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')




@app.route('/sound')
def sound():
    return render_template('sound.html')








if __name__ == '__main__':
    app.run(debug=True)
