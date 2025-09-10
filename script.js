 // Navbar toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector("header");
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); navMenu.classList.toggle('show'); });
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => { hamburger.classList.remove('active'); navMenu.classList.remove('show'); });
    });
    window.addEventListener("scroll", () => { header.classList.toggle("scrolled", window.scrollY > 10); });

    // Services
    let services = [
      { title: "Spiral Braids", description: "A unique and effortless style that make maintaining curls simple and chic.", image:"Snapchat-1812647462.jpg", whatsapp:"Hi! I want to book Spiral Braids" },
      { title: "Knotless Braids", description: "A popular protective hairstyle for natural and permed hair..", image:"p1.jpg", whatsapp:"Hi! I want to book Knotless Braids." },
      { title: "Mowhak Braids", description: "A versatile style for any type of occasion.", image:"p2a.jpg", whatsapp:"Hi! I want to book Mowhak Braids." },
      { title: "Afro Boho Braids", description: "Elegant style for my girlies", image:"p3a.jpg", whatsapp:"Hi! I want to book Afo Boho Braids." },
       { title: "locs", description: "Suitable for hair growth.", image:"p4.jpg", whatsapp:"Hi! I want to book Locs." }
     
     
    ];
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = services.map(s => `
      <div class="card">
        <img src="${s.image}" alt="${s.title}">
        <div class="card-body">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
          <a class="btn" href="https://wa.me/233505432385?text=${encodeURIComponent(s.whatsapp)}" target="_blank">Book on WhatsApp</a>
        </div>
      </div>
    `).join("");

    // Typing effect (infinite loop)
    const typingEl = document.querySelector(".typing-text");
    const text = "Serving up nothing but the baddest braids.";
    let i = 0, isDeleting = false;
    function typeEffect() {
      typingEl.textContent = text.slice(0, i);
      if (!isDeleting && i < text.length) {
        i++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && i > 0) {
        i--;
        setTimeout(typeEffect, 50);
      } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 800);
      }
    }

    // On load
    window.onload = () => {
      document.getElementById("welcome").style.display = "block";
      typeEffect();
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    };