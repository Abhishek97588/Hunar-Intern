document.addEventListener('DOMContentLoaded', function() {
    // Generate trending cards
    const trendingCardsContainer = document.getElementById('trending-cards');
    for (let i = 1; i <= 10; i++) {
        trendingCardsContainer.innerHTML += `
            <div class="trending-card">
                <span class="number-tag">${i}</span>
                <img src="/images/poster${i}.jpg" alt="Trending ${i}">
            </div>
        `;
    }

    // Generate reason cards
    const reasonCardsContainer = document.querySelector('.reason-cards');
    const reasons = [
        {
            title: "Enjoy on your TV",
            description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        },
        {
            title: "Download your shows to watch offline",
            description: "Save your favourites easily and always have something to watch."
        },
        {
            title: "Watch everywhere",
            description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
        },
        {
            title: "Create profiles for kids",
            description: "Send kids on adventures with their favourite characters in a space made just for them."
        },
        {
            title: "Ad-Free Experience",
            description: "Enjoy movies and TV shows without any ads interruptions."
        },
        {
            title: "Personalized Recommendations",
            description: "Get shows and movies tailored to your taste based on what you watch."
        }
    ];

    reasons.forEach(reason => {
        reasonCardsContainer.innerHTML += `
            <div class="reason-card">
                <h3>${reason.title}</h3>
                <p>${reason.description}</p>
            </div>
        `;
    });

    // Generate FAQ items
    const faqContainer = document.querySelector('.faq-container');
    const faqs = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
        },
        {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
        }
    ];

    faqs.forEach(faq => {
        faqContainer.innerHTML += `
            <div class="faq-item">
                <div class="faq-question">${faq.question} <span>+</span></div>
                <div class="faq-answer">${faq.answer}</div>
            </div>
        `;
    });

    // Carousel navigation
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const trendingCards = document.querySelector('.trending-cards');

    leftArrow.addEventListener('click', () => {
        trendingCards.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        trendingCards.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';
            
            // Close all answers first
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.faq-question span').forEach(span => {
                span.textContent = '+';
            });
            
            // Toggle current answer if it wasn't open
            if (!isOpen) {
                answer.style.display = 'block';
                question.querySelector('span').textContent = '×';
            }
        });
    });
});