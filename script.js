function setLanguage(lang) {
    document.getElementById('welcome').innerText = translations[lang].welcome;
    document.getElementById('about-title').innerText = translations[lang].about;
    document.getElementById('about-text').innerText = translations[lang].aboutText;
    document.getElementById('skills-title').innerText = translations[lang].skills;
    document.getElementById('contact-title').innerText = translations[lang].contact;
    document.getElementById('contact-text').innerHTML = translations[lang].contactText;
    document.getElementById('github-text').innerHTML = translations[lang].githubText;
    document.getElementById('knowledge-text').innerText = translations[lang].knowledge;

   
    const navLinks = document.querySelectorAll('nav a');
    navLinks[0].innerText = translations[lang].about;
    navLinks[1].innerText = translations[lang].skills;
    navLinks[2].innerText = translations[lang].contact;
}


document.addEventListener('DOMContentLoaded', function() {
   
    setLanguage('de');

   
    const languageSelect = document.querySelector('#language-dropdown select');
    languageSelect.addEventListener('change', function() {
        setLanguage(this.value);
    });
});
