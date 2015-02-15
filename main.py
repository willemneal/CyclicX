from flask import Flask, Response, stream_with_context
import pickle
from flask import render_template, session, redirect, url_for, request, jsonify
import thread
import sqlite3
from flask import g
from datetime import datetime
from hashlib import md5
import redis
import json, pdb


app = Flask(__name__)



@app.route('/')
def mainPage():
    return app.send_static_file('pages/task.html')

@app.route('/test', methods=["POST"])
def test():
    print request.form


app.secret_key = "\xf3Bg\x90\xec $xv\xee\xca`,A\"\'\x0f\\M&a\xf9\xbd\xdc"



if __name__ == '__main__':
    app.run(debug=True, threaded=True, host='0.0.0.0')
