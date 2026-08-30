const packages = {

    goa: {
        title: "Goa Tour Package",
        subtitle: "3 Nights / 4 Days",
        tagline: "Beaches, adventure, nightlife and unforgettable coastal experiences.",

        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=90",

        journeyTitle:
            "A carefully planned Goa experience designed to help you enjoy the best of beaches, sightseeing and coastal life.",

        itinerary: [
            {
                day: "Day 1",
                title: "Arrival & Beach",
                description:
                    "Arrive in Goa, check in to your hotel and relax. Spend the evening enjoying the beach and beautiful sunset."
            },
            {
                day: "Day 2",
                title: "North Goa",
                description:
                    "Explore the popular beaches and attractions of North Goa including Fort Aguada, Calangute, Baga and Anjuna."
            },
            {
                day: "Day 3",
                title: "South Goa",
                description:
                    "Discover the peaceful side of Goa with South Goa beaches, scenic locations and local sightseeing."
            },
            {
                day: "Day 4",
                title: "Departure",
                description:
                    "Enjoy breakfast at the hotel, check out and proceed for your departure with wonderful Goa memories."
            }
        ],

        included: [
            "Hotel accommodation",
            "Daily breakfast",
            "Airport / railway station transfers",
            "Local sightseeing as per itinerary",
            "Private or shared transportation",
            "Driver and vehicle charges",
            "Trip planning assistance"
        ],

        notIncluded: [
            "Flights or train tickets",
            "Personal expenses",
            "Optional activities",
            "Entry tickets to attractions",
            "Lunch and dinner unless specified",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ]
    }

};


/* =========================================================
   LOAD PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);

    const place = urlParams.get("place") || "goa";

    const packageData = packages[place];


    /* =====================================================
       CHECK DESTINATION
    ===================================================== */

    if (!packageData) {

        document.body.innerHTML = `
            <div style="
                min-height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                text-align:center;
                font-family:Arial,sans-serif;
                padding:40px;
            ">
                <div>
                    <h1>Destination Not Found</h1>
                    <p>Sorry, this destination is currently unavailable.</p>
                    <a href="index.html">Back to Home</a>
                </div>
            </div>
        `;

        return;
    }


    /* =====================================================
       PAGE TITLE
    ===================================================== */

    document.title = packageData.title + " | Vimana Tours";


    /* =====================================================
       HERO IMAGE
    ===================================================== */

    const heroImage = document.getElementById(".package-hero img");

    if (heroImage) {

        heroImage.style.backgroundImage =
            "url('" + packageData.image + "')";

        heroImage.style.backgroundSize = "cover";
        heroImage.style.backgroundPosition = "center";
        heroImage.style.backgroundRepeat = "no-repeat";

    } else {

        console.error(
            "ERROR: Element with id='' package-hero was not found."
        );

    }


    /* =====================================================
       HERO TITLE
    ===================================================== */

    const packageTitle =
        document.getElementById("packageTitle");

    if (packageTitle) {
        packageTitle.textContent = packageData.title;
    }


    /* =====================================================
       HERO TAGLINE
    ===================================================== */

    const packageTagline =
        document.getElementById("packageTagline");

    if (packageTagline) {
        packageTagline.textContent = packageData.tagline;
    }


    /* =====================================================
       HERO DURATION
    ===================================================== */

    const packageDuration =
        document.getElementById("packageDuration");

    if (packageDuration) {
        packageDuration.textContent = packageData.subtitle;
    }


    /* =====================================================
       JOURNEY DESCRIPTION
    ===================================================== */

    const journeyDescription =
        document.getElementById("journeyDescription");

    if (journeyDescription) {

        journeyDescription.textContent =
            packageData.journeyTitle;

    }


    /* =====================================================
       ITINERARY
    ===================================================== */

    const itineraryContainer =
        document.getElementById("itinerary");

    if (itineraryContainer) {

        itineraryContainer.innerHTML = "";

        packageData.itinerary.forEach(function (item) {

            const dayCard =
                document.createElement("div");

            dayCard.className =
                "itinerary-card";

            dayCard.innerHTML = `
                <div class="day-number">
                    ${item.day}
                </div>

                <div class="day-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;

            itineraryContainer.appendChild(dayCard);

        });

    }


    /* =====================================================
       WHAT'S INCLUDED
    ===================================================== */

    const includedContainer =
        document.getElementById("included");

    if (includedContainer) {

        includedContainer.innerHTML = "";

        packageData.included.forEach(function (item) {

            const li =
                document.createElement("li");

            li.textContent = "✓ " + item;

            includedContainer.appendChild(li);

        });

    }


    /* =====================================================
       WHAT'S NOT INCLUDED
    ===================================================== */

    const notIncludedContainer =
        document.getElementById("notIncluded");

    if (notIncludedContainer) {

        notIncludedContainer.innerHTML = "";

        packageData.notIncluded.forEach(function (item) {

            const li =
                document.createElement("li");

            li.textContent = "✕ " + item;

            notIncludedContainer.appendChild(li);

        });

    }

});

