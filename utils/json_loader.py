import os, json

BASE_DIR = os.path.dirname(os.path.dirname(__file__))  # project root

def load_json(filename):
    filepath = os.path.join(BASE_DIR, "seed", filename)
    with open(filepath, "r") as f:
        return json.load(f)
