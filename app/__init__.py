from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Import and register blueprints
    from routes.dashboard import dashboard_bp
    from routes.courses import courses_bp
    from routes.cgpa import cgpa_bp
    from routes.assignments import assignments_bp
    from routes.user import user_bp

    app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")
    app.register_blueprint(courses_bp, url_prefix="/api/courses")
    app.register_blueprint(cgpa_bp, url_prefix="/api/cgpa")
    app.register_blueprint(assignments_bp, url_prefix="/api/assignments")
    app.register_blueprint(user_bp, url_prefix="/api/user")

    return app
