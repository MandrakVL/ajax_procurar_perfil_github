let perfilGithub = 'MandrakVL';

    function btnConfirm() {
        const nomeInput = document.querySelector('#nome-input');
        perfilGithub = nomeInput.value;
        nomeInput.value = '';

        atualizarPerf()
    }

function atualizarPerf() {
    const avatarElement = document.querySelector('#avatar');

    const nomeElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repositorio');
    const followersElement = document.querySelector('#seguidores');
    const followingElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link-prof');


    fetch(`https://api.github.com/users/${perfilGithub}`)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nomeElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url;
        reposElement.innerHTML = json.public_repos;
    })

}

document.addEventListener('DOMContentLoaded', function() {
    atualizarPerf()
})
