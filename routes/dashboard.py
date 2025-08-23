from flask import Blueprint, jsonify
import os, json

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/", methods=["GET"])
def get_dashboard():
    file_path = os.path.join(os.path.dirname(__file__), "../seed/dashboard.json")
    with open(file_path, "r") as f:
        data = json.load(f)
    return jsonify(data)
