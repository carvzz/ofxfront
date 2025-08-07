async function enviarArquivo() {
  const input = document.getElementById('fileInput');
  const status = document.getElementById('status');
  if (!input.files.length) {
    status.innerText = 'Selecione um arquivo primeiro.';
    return;
  }

  const formData = new FormData();
  formData.append("file", input.files[0]);

  status.innerText = "Enviando arquivo...";

  try {
    const response = await fetch("https://seu-backend.onrender.com/convert", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error("Erro na conversão.");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resultado.ofx";
    document.body.appendChild(a);
    a.click();
    a.remove();
    status.innerText = "Download iniciado!";
  } catch (error) {
    status.innerText = "Erro: " + error.message;
  }
}
