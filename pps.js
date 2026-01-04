<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ujjwal Tiwari | Aspiring Data Scientist</title>
    
    <meta name="description" content="Ujjwal Tiwari's Portfolio - Electronics & CS Engineer, Data Science Aspirant, and R&D Leader.">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

    <style>
        :root { --primary-blue: #0d6efd; --dark-bg: #212529; }
        body { font-family: 'Inter', sans-serif; background-color: #f8f9fa; color: #333; scroll-behavior: smooth; }
        .section { padding: 90px 0; }
        .navbar { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        
        /* Hero Styling */
        .hero { 
            min-height: 100vh; display: flex; align-items: center; 
            background: linear-gradient(135deg, #ffffff 0%, #eef2f7 100%);
        }
        .profile-img { width: 200px; height: 200px; border-radius: 50%; border: 8px solid #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        
        /* Card & UI Polish */
        .card { border: none; border-radius: 16px; transition: 0.3s; height: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .card:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
        .badge-tech { background: #e7f1ff; color: #0d6efd; padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin: 2px; }
        
        .section-title { font-weight: 700; margin-bottom: 50px; text-align: center; position: relative; }
        .section-title::after { content: ''; width: 50px; height: 4px; background: var(--primary-blue); position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); }
        
        footer { background: var(--dark-bg); color: white; padding: 50px 0; }
    </style>
</head>
<body data-bs-spy="scroll" data-bs-target="#navbar">

    <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="#">UT.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto fw-medium">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Profile</a></li>
                    <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">GitHub</a></li>
                    <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container text-center">
            <img src="https://placehold.co/200x200/0d6efd/ffffff?text=UT" alt="Ujjwal Tiwari" class="profile-img mb-4">
            <h1 class="display-3 fw-bold">Ujjwal Suneel Tiwari</h1>
            <p class="lead text-primary fw-bold mb-2">Aspiring Data Scientist | Electronics & CS Engineer</p>
            <p class="text-muted mx-auto" style="max-width: 650px;">
                Bridging the gap between Embedded Systems and Data Intelligence. 
                Currently Co-Head of the R&D Cell at Shree L.R. Tiwari College of Engineering.
            </p>
            <div class="mt-4">
                <a href="#contact" class="btn btn-primary btn-lg px-4 me-2 shadow">Get In Touch</a>
                <a href="#" class="btn btn-outline-dark btn-lg px-4">Download Resume</a>
            </div>
        </div>
    </section>

    <section id="about" class="section bg-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-4">
                    <h2 class="fw-bold mb-3">Academic Profile</h2>
                    <p>Bachelor of Engineering in Electronics & Computer Science (2023-2027).</p>
                    <div class="p-3 bg-light rounded-4 mb-3 border-start border-primary border-4">
                        <h6 class="fw-bold mb-1">Co-Head, R&D Cell </h6>
                        <p class="small mb-0 text-muted">Leading team hackathons and managing innovative technical research for Shree L.R. Tiwari College of Engineering.</p>
                    </div>
                    <p>Focused on Data Structures, OOPs, Embedded Systems, and Computer Networks.</p>
                </div>
                <div class="col-md-6">
                    <div class="row g-3 text-center">
                        <div class="col-6"><div class="card p-4"><h2 class="text-primary fw-bold">3+</h2><p class="small mb-0 text-uppercase">Internships</p></div></div>
                        <div class="col-6"><div class="card p-4"><h2 class="text-primary fw-bold">5+</h2><p class="small mb-0 text-uppercase">Projects</p></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="experience" class="section bg-light">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card p-4">
                        <div class="mb-3 text-primary"><i class="fas fa-chart-line fa-2x"></i></div>
                        <h5 class="fw-bold">Data Analysis Intern</h5>
                        <p class="small text-muted mb-3">Focus on Python (Pandas, Matplotlib) and SQL to generate actionable insights.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4">
                        <div class="mb-3 text-primary"><i class="fas fa-microchip fa-2x"></i></div>
                        <h5 class="fw-bold">Embedded Systems Intern</h5>
                        <p class="small text-muted mb-1">Circuit Wizard </p>
                        <p class="small text-muted mb-0">Reduced prototype error rates by 15% through hardware-software optimization.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4">
                        <div class="mb-3 text-primary"><i class="fab fa-python fa-2x"></i></div>
                        <h5 class="fw-bold">Python Intern</h5>
                        <p class="small text-muted mb-3">Automated scripts and implemented ordering systems using JSON storage.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="section bg-white">
        <div class="container">
            <h2 class="section-title">Live GitHub Repositories</h2>
            <div id="github-projects-row" class="row g-4">
                <div class="text-center"><div class="spinner-border text-primary"></div></div>
            </div>
        </div>
    </section>

    <section id="skills" class="section bg-light">
        <div class="container">
            <h2 class="section-title">Technical Expertise</h2>
            <div class="row text-center g-4">
                <div class="col-md-4">
                    <div class="card p-4">
                        <h6 class="fw-bold text-uppercase text-primary mb-3">Data Science </h6>
                        <div><span class="badge-tech">Python</span><span class="badge-tech">SQL</span><span class="badge-tech">Pandas</span><span class="badge-tech">NumPy</span><span class="badge-tech">Matplotlib</span><span class="badge-tech">ML Basics</span></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4">
                        <h6 class="fw-bold text-uppercase text-primary mb-3">Embedded </h6>
                        <div><span class="badge-tech">Arduino</span><span class="badge-tech">Raspberry Pi</span><span class="badge-tech">IoT</span><span class="badge-tech">TinkerCad</span><span class="badge-tech">C / C++</span></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4">
                        <h6 class="fw-bold text-uppercase text-primary mb-3">Core & Logic </h6>
                        <div><span class="badge-tech">Problem Solving</span><span class="badge-tech">Team Leadership</span><span class="badge-tech">Git</span><span class="badge-tech">Excel</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <div class="container">
            <h2 class="section-title">Let's Connect</h2>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card p-4 shadow-lg border-0">
                        <form id="contactForm">
                            <div class="mb-3"><label class="form-label">Full Name</label><input type="text" class="form-control" id="name" required></div>
                            <div class="mb-3"><label class="form-label">Email Address</label><input type="email" class="form-control" id="email" required></div>
                            <div class="mb-3"><label class="form-label">Message</label><textarea class="form-control" rows="4" id="message" required></textarea></div>
                            <button type="submit" id="sendBtn" class="btn btn-primary w-100 py-2 fw-bold">Send Message</button>
                        </form>
                        <div id="form-message" class="mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container text-center">
            <h4 class="fw-bold mb-4">UT.</h4>
            <div class="mb-4">
                <a href="#" class="text-white mx-3 fs-4"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-white mx-3 fs-4"><i class="fab fa-github"></i></a>
                <a href="#" class="text-white mx-3 fs-4"><i class="fas fa-envelope"></i></a>
            </div>
            <p class="small opacity-50 mb-0">© 2026 Ujjwal Suneel Tiwari. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // 1. EmailJS Configuration
        (function() {
            emailjs.init("ON_LqU563pPAcM8Zv"); // REPLACE THIS
        })();

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('sendBtn');
            const messageDiv = document.getElementById('form-message');
            btn.innerHTML = "Sending...";
            btn.disabled = true;
            messageDiv.innerHTML = '';

            emailjs.send("service_6bui3eb", "template_ox6qwet", { // REPLACE THESE
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            }).then(() => {
                messageDiv.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
                document.getElementById('contactForm').reset();
            }).catch((error) => {
                messageDiv.innerHTML = '<div class="alert alert-danger">Failed to send message. Please try again later.</div>';
                console.error('EmailJS Error:', error);
            }).finally(() => {
                btn.innerHTML = "Send Message";
                btn.disabled = false;
            });
        });

        // 2. GitHub API Configuration
        const GITHUB_USER = "Knight6azer"; // REPLACE THIS

        async function loadRepos() {
            const row = document.getElementById('github-projects-row');
            try {
                const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`);
                if (!res.ok) {
                    throw new Error(`GitHub API error: ${res.status}`);
                }
                const data = await res.json();
                if (!Array.isArray(data)) {
                    throw new Error('Invalid response from GitHub API');
                }
                const repos = data.filter(repo => !repo.fork).slice(0, 6);
                if (repos.length === 0) {
                    row.innerHTML = '<p class="text-center text-muted">No public repositories found.</p>';
                    return;
                }
                row.innerHTML = '';
                repos.forEach(repo => {
                    const repoName = (repo.name || '').replace(/-/g, ' ').replace(/_/g, ' ');
                    const description = (repo.description || 'Data Science & Engineering project exploration.').substring(0, 100);
                    const language = repo.language || 'Code';
                    row.innerHTML += `
                        <div class="col-md-4">
                            <div class="card p-3 border-0">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <i class="fab fa-github fa-lg"></i>
                                    <span class="badge-tech">${language}</span>
                                </div>
                                <h6 class="fw-bold mb-1">${repoName}</h6>
                                <p class="small text-muted flex-grow-1">${description}</p>
                                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary mt-2">Source Code</a>
                            </div>
                        </div>`;
                });
            } catch (err) { 
                row.innerHTML = '<p class="text-center text-muted">Unable to load GitHub projects. Please check your connection.</p>';
                console.error('GitHub API Error:', err);
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadRepos);
        } else {
            loadRepos();
        }
    </script>
</body>
</html>