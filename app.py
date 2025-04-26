import os
import logging
from flask import Flask, render_template, send_from_directory

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__, static_folder='static')
app.secret_key = os.environ.get("SESSION_SECRET", "godxp-secret-key")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.route('/templates/static/<path:path>')
def serve_template_static(path):
    """This route is for handling the static deployment case where paths start with 'templates/static'"""
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
