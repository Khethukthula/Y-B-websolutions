        function scrollToProjects() {
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Animated Background Script
        function createStreak() {
            const streak = document.createElement("div");
            streak.className = "streak";

            streak.style.left = Math.random() * window.innerWidth + "px";
            streak.style.top = window.innerHeight + Math.random() * 200 + "px";
            streak.style.animationDuration = 7 + Math.random() * 3 + "s";

            document.querySelector(".background").appendChild(streak);

            setTimeout(() => streak.remove(), 8000);
        }

        setInterval(createStreak, 300);
        setInterval(createStreak, 400);
