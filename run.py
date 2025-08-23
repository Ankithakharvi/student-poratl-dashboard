import os

from flask import Flask
from flask_cors import CORS   # 🔹 import CORS
from routes.dashboard import dashboard_bp
from routes.courses import courses_bp
from routes.cgpa import cgpa_bp
from routes.assignments import assignments_bp
from routes.user import user_bp

app = Flask(__name__)
CORS(app)  # 🔹 Enable CORS for all routes

# Register routes
app.register_blueprint(dashboard_bp, url_prefix="/api/user")
app.register_blueprint(courses_bp, url_prefix="/api/courses")
app.register_blueprint(cgpa_bp, url_prefix="/api/cgpa")
app.register_blueprint(assignments_bp, url_prefix="/api/assignments")
app.register_blueprint(user_bp, url_prefix="/api/user")




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))

