from flask import Blueprint, jsonify, request
from utils.json_loader import load_json

assignments_bp = Blueprint("assignments", __name__)

@assignments_bp.route("/", methods=["GET"])
def get_assignments():
    data = load_json("assignments.json")

    # Optional filtering by course_id or assignment_id
    course_id = request.args.get("course_id")
    assignment_id = request.args.get("assignment_id")

    if course_id:
        data = [a for a in data if a["course_id"] == course_id]
    if assignment_id:
        data = [a for a in data if a["id"] == assignment_id]

    return jsonify(data)
