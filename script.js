async function cadastrarAluno() {
    const cgm = document.getElementById('cgm').value;
    const nome = document.getElementById('nome').value;
    const d_n = document.getElementById('data_nascimento').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cgm, nome, d_n })
    });

    alert('Aluno cadastrado com sucesso!');
}

