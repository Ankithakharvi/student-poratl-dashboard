from flask import Blueprint, jsonify
from utils.json_loader import load_json

courses_bp = Blueprint("courses", __name__)

@courses_bp.route("/", methods=["GET"])
def get_courses():
    data = load_json("courses.json")
    return jsonify(data)
