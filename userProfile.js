document.addEventListener("DOMContentLoaded", function () {
    let lightMode = document.getElementById('light-mode');
    let darkMode = document.getElementById('dark-mode');
    let themebtn = document.getElementById('theme');

    lightMode.style.display = 'none';

    themebtn.addEventListener("click", function (event) {
        document.body.classList.toggle("dark-theme");
        // dark-mode condition
        if (document.body.classList.contains("dark-theme")) {
            lightMode.style.display = 'block';
            darkMode.style.display = 'none';
            document.body.style.backgroundColor = "black";
            document.body.style.color = 'white';
            let navbar = document.getElementById('nav-dark');
            navbar.classList.add('bg-dark');
            navbar.classList.remove('text-dark');   
            navbar.classList.add('text-light');

        } 
        // light-mode condition
        else {
            lightMode.style.display = 'none';
            darkMode.style.display = 'block';
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            let navbar = document.getElementById('nav-dark');
            navbar.classList.remove('bg-dark');
            navbar.classList.add('bg-light');
            navbar.classList.add('text-dark');
        }

        const cardElements = document.querySelectorAll('.card');
        cardElements.forEach(function (card) {
            card.classList.toggle('bg-dark', document.body.classList.contains('dark-theme'));
            card.classList.toggle('bg-light', !document.body.classList.contains('dark-theme'));
            card.classList.toggle('text-dark', !document.body.classList.contains('dark-theme'));
            card.classList.toggle('text-light', document.body.classList.contains('dark-theme'));
        });
    });
});



