function showSection(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

const user = { email: "user@example.com", password: "password123" };

function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email === user.email && pass === user.password) {
        localStorage.setItem("logged", "yes");
        showSection("dashboard-section");
        loadCourses();
    } else {
        alert("Invalid credentials");
    }
}

function logout() {
    localStorage.removeItem("logged");
    showSection("login-section");
}

const courses = [
    { id: 1, title: "HTML Basics", progress: 40 },
    { id: 2, title: "CSS Styling", progress: 70 },
    { id: 3, title: "JavaScript Fundamentals", progress: 20 }
];

function loadCourses() {
    const container = document.getElementById("courses");
    container.innerHTML = "";
    courses.forEach(c => {
        container.innerHTML += `<div>${c.title} - Progress: ${c.progress}%</div>`;
    });
}

window.onload = () => {
    if (localStorage.getItem("logged")) {
        showSection("dashboard-section");
        loadCourses();
    } else {
        showSection("login-section");
    }
};
