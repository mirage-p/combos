# FullStack Boxing Combo List App
This directory contains the backend and frontend code for the current progress of my application.
Keep in mind. This is just me initializing the skeletal framework for future progress.

## Backend (backend directory):

### config.py:
This file contains configurations for the Flask application, including database connection details and Flask settings.

### models.py:
This file defines the data model for "combos" using the SQLAlchemy library. It includes a class named Combo with attributes like id, stance, lead_leg, starting_range, and sequence. The to_json method within this class converts a Combo object into a JSON-compatible dictionary.

### main.py:
This file serves as the entry point for the backend application. It imports necessary modules, defines a route (/combos) to retrieve all combos from the database, and starts the Flask development server.

## Frontend (frontend directory):

This directory contains the React application code generated using
> `npm create vite@latest frontend -- --template react.`

The specific structure and contents might vary depending on your further development, but it typically includes:

### package.json:
This file specifies project dependencies and scripts.

### src:
This directory contains the source code for your React components and other frontend logic.

### public:
This directory might hold static assets like images or favicons.

### Additional configuration files:
Depending on your setup, you might have additional configuration files like .env or configuration files specific to Vite.

## Running the Application:

### Navigate to the backend directory (backend):
Use `cd backend` in your terminal.

### Install dependencies:
Run `pip install flask flask-sqlalchemy flask-cors` to install the required Python libraries.

### Run the backend development server:
Execute `python main.py` to start the server.

### Navigate to the frontend directory (frontend):
Use `cd ../frontend` to switch to the frontend directory.

### Install dependencies:
Run `npm install` or `yarn install` to install the frontend dependencies specified in package.json.

Start the frontend development server: Run npm run dev or yarn dev to start the Vite development server, usually accessible at http://localhost:3000 by default.