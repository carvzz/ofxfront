from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from io import BytesIO

app = FastAPI()

@app.post("/convert")
async def convert(file: UploadFile = File(...)):
    contents = await file.read()
    ofx_data = b"OFXHEADER:100\nDATA:OFXSGML\n...\n"  # Simulação
    return StreamingResponse(BytesIO(ofx_data), media_type="application/ofx", headers={"Content-Disposition": "attachment; filename=resultado.ofx"})
