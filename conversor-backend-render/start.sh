#!/bin/bash
pip install -r requirements.txt
uvicorn api.index:app --host 0.0.0.0 --port 10000
