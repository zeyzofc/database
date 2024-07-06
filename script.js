var quotesData = [{
          main: "Even if you're on the right track, you'll get run over If you just sit there",
          sub: "You must keep going",
          from: "- Will Rogers"
     },

     {
          main: "I’ve learned that people will forget what you said, people will forget what you did, but people will",
          sub: "Never forget how you made them feel",
          from: "- Maya Angelou"
     },

     {
          main: "Teknologi tidak dapat menggantikan manusia, tetapi yang penting",
          sub: "Pinjam dulu seratus",
          from: "- Jeremi Herodian"
     },

     {
          main: "If you want to be a true professional",
          sub: "Do something outside yourself",
          from: "- Ruth Bader Ginsburg"
     },
]

const refreshButton = document.getElementById("fresh");
refreshButton.addEventListener("click", getRandomQuotes);

function getRandomQuotes() {
     gsap.to('#quotesMain', {
          duration: 0,
          text: ''
     })
     gsap.to('#quotesSub', {
          duration: 0,
          text: ''
     })
     gsap.to('#Who', {
          duration: 0,
          text: ''
     })

     var item = quotesData[Math.floor(Math.random() * quotesData.length)];

     gsap.to("#quotesMain", {
          text: {
               value: item['main']
          },
          duration: 1.5,
          ease: "none"
     })

     gsap.to("#quotesSub", {
          text: {
               value: item['sub']
          },
          duration: 1.7,
          ease: "none"
     })

     gsap.to("#Who", {
          text: {
               value: item['from']
          },
          duration: 0.5,
          ease: "none"
     })
}

getRandomQuotes()
