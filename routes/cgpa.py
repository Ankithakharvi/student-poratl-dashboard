from flask import Blueprint, jsonify
from utils.json_loader import load_json

cgpa_bp = Blueprint("cgpa", __name__)

@cgpa_bp.route("/", methods=["GET"])
def get_cgpa():
    data = load_json("cgpa.json")
    return jsonify(data)
