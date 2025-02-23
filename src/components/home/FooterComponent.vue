<template>
  <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Logo Section -->
                <div class="footer-brand">
                    <div class="brand-name">
                      <img src="../../assets/img/logo_delgado.png" alt="">
                    </div>
                    <div class="brand-description">Losdfafasrem ipsum dolor sit amet consectetur adipisicing elit. </div>
                </div>

                <!-- About Section -->
                <div class="footer-about">
                    <h3 class="footer-title">Sobre Nosotros</h3>
                    <p class="footer-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis, voluptatem.
                    </p>
                    <p class="footer-text">
                        Quaerat perferendis reprehenderit voluptatem cum nemo velit rem.
                    </p>
                </div>

                <!-- Social Media Section -->
                <div class="footer-social">
                    <h3 class="footer-title">Síguenos</h3>
                    <div class="social-links">
                      <a href="#" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 10v4h3v7h4v-7h3l1-4h-4v-2a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7" />
                            </svg>
                        </a>

                        <a href="#" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0-1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>

                        <a href="#" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z" />
                                <path d="M8 11v5" />
                                <path d="M8 8v.01" />
                                <path d="M12 16v-5" />
                                <path d="M16 16v-3a2 2 0 0 0-4 0" />
                            </svg>
                        </a>

                        <a href="#" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-8z" />
                                <path d="M10 9l5 3-5 3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="footer-copyright">
                © 2025 Rayito de sol - Todos los Derechos Reservados.
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Footer */
.footer {
  background-color: #85a947;
    /* background-color: #85a947; */
    padding: 2rem 0rem 1rem 0rem;
}

.container {
    width: 100%;
    padding: 0 2rem;
}

/* Grid Layout */
.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Brand Section */
.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* .brand-name {
  background-color: black;
} */

.brand-name img{
  width: 100%;
  height: auto;
}
.brand-description {
    font-size: 0.875rem;
    color: var(--color-green);
    font-weight: bold;
}

/* About Section */
.footer-about {
    max-width: 400px;
}

.footer-title {
    font-size: 1.125rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    align-self: start;
}

.footer-text {
    font-size: 0.875rem;
    color: #ffffff;
}

/* Social Media */
.footer-social {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.social-links {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
}

.social-icon  {
    width: 24px;
    height: 24px;
    /* background-color: aqua; */
}
.social-icon:hover {
    color: beige; /* Cambia el color a beige en hover */
}


/* Copyright */
.footer-copyright {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #2D3748;
    text-align: center;
    font-size: 0.875rem;
    color: #ffffff;
}

</style>
