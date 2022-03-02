from dotenv import load_dotenv
import os
load_dotenv()

MONGODB_URL = os.getenv('MONGODB_URL')
PORT = os.getenv('PORT')

from flask import Flask, render_template, request, jsonify
app = Flask(__name__)


from pymongo import MongoClient
import certifi
ca = certifi.where()
client = MongoClient( MONGODB_URL ,tlsCAFile=ca)
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/homework", methods=["POST"])
def homework_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {
        'name': name_receive,
        'comment': comment_receive
    }
    db.homework.insert_one(doc)

    return jsonify({'msg':'POST 저장 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    comment_list = list(db.homework.find({}, {'_id': False}))
    return jsonify({'homework':comment_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=PORT, debug=True)