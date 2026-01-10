
document.querySelectorAll(".quiz-link").forEach(link => {
    link.addEventListener("click", (e) => {
        localStorage.setItem("quizTitle", e.currentTarget.dataset.title);
    });
});

