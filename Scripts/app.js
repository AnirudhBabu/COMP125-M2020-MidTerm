/* File Name    : app.js
   Author's Name: Anirudh Babu
   Website Name : index.html
   File Description: A JavaScript file that injects text into index.html and gives some output
    to the browser console.
 */
"use strict";
// setup your IIFE (Immediately Invoked Function Expression)

(function () {
    
    //paragraph text injects start here
    document.getElementById("IntroParagraph").innerText = 
    `Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn\'t impacted the experience of visiting. Plus, there may be some great deals. 

    Greece has 1,400 islands, though only 230 of them are inhabited. 
    
    And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.`;
    document.getElementById("Folegandros").innerText = 
    `Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.`;
    document.getElementById("Alonissos").innerText = 
    `Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.`;
    document.getElementById("Spetses").innerText = 
    `This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.`;
    document.getElementById("Amorgos").innerText =
    `Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.`;
    document.getElementById("Syros").innerText = 
    `A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.`;
    document.getElementById("Milos").innerText = 
    `This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.`;
    document.getElementById("Hydra").innerText = 
    `The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.`;
    document.getElementById("Ithaca").innerText = 
    `Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.`;
    document.getElementById("Gavdos").innerText = 
    `Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.`;
    
    //stores the user-typed values obtained from the form in suitably named variables
    // and outputs them to the console in a pretty way (according to me)
    function StoreSubmitValues()
    {
        let contactForm = document.getElementsByTagName("form")[0];
        let submitButton = document.getElementById("sendButton");
        submitButton.addEventListener("click", (event) =>
        {
            //prevents reloading and reset
            event.preventDefault();

            //gets the value entered by the user for each field and assigns them to variables
            let firstName = document.getElementById("firstName");
            let lastName = document.getElementById("lastName");
            let contactNumber = document.getElementById("contactNumber");
            let email = document.getElementById("email");
            let yourMessage = document.getElementById("yourMessage");
            
            //style applied for the console.log messages
            let styler = "background-color: #E0F8FA; color: #AD5204; font-size: 2em; font-family: Algerian;";

            //code to output to browser console
            console.log(`%cFirst Name           : ${firstName.value}`, styler);
            console.log(`%cLast Name            : ${lastName.value}`, styler);
            console.log(`%cContact Number: ${contactNumber.value}`, styler);
            console.log(`%cEmail                      : ${email.value}`, styler);
            console.log(`%cMessage                : ${yourMessage.value}`, styler);
            
            //resets after all the above has been done to signify submission occurred
            contactForm.reset();
        });
        
    }
    function LinkCarouselImages()
    {
        document.getElementsByTagName("article")[1].id = "FolegandrosArt";
        let carouselImgFolegandros = document.getElementsByTagName("img")[0];
        let linkTagFole = document.createElement("a");
        linkTagFole.href = `#FolegandrosArt`;
        linkTagFole.title = "Read more about Folegandros";
        carouselImgFolegandros.parentNode.insertBefore(linkTagFole, carouselImgFolegandros);
        linkTagFole.appendChild(carouselImgFolegandros);

        document.getElementsByTagName("article")[2].id = "AlonissosArt";
        let carouselImgAlonissos = document.getElementsByTagName("img")[1];
        let linkTagAlon = document.createElement("a");
        linkTagAlon.href = `#AlonissosArt`;
        linkTagAlon.title = "Read more about Alonissos";
        carouselImgAlonissos.parentNode.insertBefore(linkTagAlon, carouselImgAlonissos);
        linkTagAlon.appendChild(carouselImgAlonissos);

        document.getElementsByTagName("article")[3].id = "SpetsesArt";
        let carouselImgSpetses = document.getElementsByTagName("img")[2];
        let linkTagSpet = document.createElement("a");
        linkTagSpet.href = `#SpetsesArt`;
        linkTagSpet.title = "Read more about Spetses";
        carouselImgSpetses.parentNode.insertBefore(linkTagSpet, carouselImgSpetses);
        linkTagSpet.appendChild(carouselImgSpetses);

        document.getElementsByTagName("article")[4].id = "AmorgosArt";
        let carouselImgAmorgos = document.getElementsByTagName("img")[3];
        let linkTagAmor = document.createElement("a");
        linkTagAmor.href = `#AmorgosArt`;
        linkTagAmor.title = "Read more about Amorgos";
        carouselImgAmorgos.parentNode.insertBefore(linkTagAmor, carouselImgAmorgos);
        linkTagAmor.appendChild(carouselImgAmorgos);

        document.getElementsByTagName("article")[5].id = "SyrosArt";
        let carouselImgSyros = document.getElementsByTagName("img")[4];
        let linkTagSyro = document.createElement("a");
        linkTagSyro.href = `#SyrosArt`;
        linkTagSyro.title = "Read more about Syros";
        carouselImgSyros.parentNode.insertBefore(linkTagSyro, carouselImgSyros);
        linkTagSyro.appendChild(carouselImgSyros);

        document.getElementsByTagName("article")[6].id = "MilosArt";
        let carouselImgMilos = document.getElementsByTagName("img")[5];
        let linkTagMilo = document.createElement("a");
        linkTagMilo.href = `#MilosArt`;
        linkTagMilo.title = "Read more about Milos";
        carouselImgMilos.parentNode.insertBefore(linkTagMilo, carouselImgMilos);
        linkTagMilo.appendChild(carouselImgMilos);

        document.getElementsByTagName("article")[7].id = "HydraArt";
        let carouselImgHydra = document.getElementsByTagName("img")[6];
        let linkTagHydr = document.createElement("a");
        linkTagHydr.href = `#HydraArt`;
        linkTagHydr.title = "Read more about Hydra";
        carouselImgHydra.parentNode.insertBefore(linkTagHydr, carouselImgHydra);
        linkTagHydr.appendChild(carouselImgHydra);

        document.getElementsByTagName("article")[8].id = "IthacaArt";
        let carouselImgIthaca = document.getElementsByTagName("img")[7];
        let linkTagItha = document.createElement("a");
        linkTagItha.href = `#IthacaArt`;
        linkTagItha.title = "Read more about Ithaca";
        carouselImgIthaca.parentNode.insertBefore(linkTagItha, carouselImgIthaca);
        linkTagItha.appendChild(carouselImgIthaca);

        document.getElementsByTagName("article")[9].id = "GavdosArt";
        let carouselImgGavdos = document.getElementsByTagName("img")[8];
        let linkTagGavd = document.createElement("a");
        linkTagGavd.href = `#GavdosArt`;
        linkTagGavd.title = "Read more about Gavdos";
        carouselImgGavdos.parentNode.insertBefore(linkTagGavd, carouselImgGavdos);
        linkTagGavd.appendChild(carouselImgGavdos);
    }
    window.addEventListener("load", StoreSubmitValues);
    window.addEventListener("load", LinkCarouselImages);
})();

