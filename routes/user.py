from flask import Blueprint, jsonify
from utils.json_loader import load_json

user_bp = Blueprint("user", __name__, url_prefix="/api/user")

@user_bp.route("/", methods=["GET"])
def get_user_data():
    data = load_json("seed/user.json")
    return jsonify(data)
