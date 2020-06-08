// Array of author objects
// id, name, [dob], [dob], [bio]
const authors = [
  {
    id: 1,
    name: "Elon Musk",
    dob: 1971,
    bio:
      "Elon Musk is an engineer, industrial designer and technology entrepreneur. He is the founder, CEO and chief engineer/designer of SpaceX; co-founder, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.",
  },
  {
    id: 2,
    name: "Steve Jobs",
    dob: 1955,
    dod: 2011,
    bio:
      "Steve Jobs was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc., the chairman and majority shareholder of Pixar, a member of The Walt Disney Company's board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak.",
  },
  {
    id: 3,
    name: "Charles Babbage",
    dob: 1791,
    dod: 1871,
    bio:
      "Charles Babbage was an English polymath. A mathematician, philosopher, inventor and mechanical engineer, Babbage originated the concept of a digital programmable computer.",
  },
  {
    id: 4,
    name: "Ada Lovelace",
    dob: 1815,
    dod: 1852,
    bio:
      "Augusta Ada King, Countess of Lovelace, was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine.",
  },
  {
    id: 5,
    name: "Alan Turing",
    dob: 1912,
    dod: 1954,
    bio:
      "Alan Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer. Turing is widely considered to be the father of theoretical computer science and artificial intelligence.",
  },
  {
    id: 6,
    name: "John Von Neumann",
    dob: 1903,
    dod: 1957,
    bio:
      "John von Neumann was a Hungarian-American mathematician, physicist, computer scientist, engineer and polymath. Von Neumann was generally regarded as the foremost mathematician of his time.",
  },
  {
    id: 7,
    name: "Bill Gates",
    dob: 1955,
    bio:
      "Bill Gates is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.",
  },
  {
    id: 8,
    name: "Homer Simpson",
    bio:
      "Homer Simpson is a fictional character and the protagonist of the American animated sitcom The Simpsons. He is voiced by Dan Castellaneta and first appeared on television, along with the rest of his family, in The Tracey Ullman Show short 'Good Night' on April 19, 1987.",
  },
  {
    id: 9,
    name: "Fred Brooks",
    dob: 1931,
    bio:
      "Fred Brooks is an American computer architect, software engineer, and computer scientist, best known for managing the development of IBM's System/360 family of computers and the OS/360 software support package, then later writing candidly about the process in his seminal book The Mythical Man-Month.",
  },
  {
    id: 10,
    name: "Maurice Wilkes",
    dob: 1913,
    dod: 2010,
    bio:
      "Maurice Wilkes was a British computer scientist who designed and helped build the Electronic delay storage automatic calculator (EDSAC), one of the earliest stored program computers and invented microprogramming, a method for using stored-program logic to operate the control unit of a central processing unit's circuits.",
  },
  {
    id: 11,
    name: "Grace Hopper",
    dob: 1906,
    dod: 1992,
    bio:
      "Grace Hopper was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers.",
  },
  {
    id: 12,
    name: "Jeremy Keith",
    bio:
      "Jeremy Keith is a web developer, writer, and musician. He authors a popular blog, and has written several books including DOM Scripting, a guide to web design with JavaScript and the Document Object Model.",
  },
  {
    id: 13,
    name: "Bjarne Stroustrup",
    dob: 1950,
    bio:
      "Bjarne Stroustrup is a Danish computer scientist, most notable for the creation and development of the C++ programming language.",
  },
  {
    id: 14,
    name: "Anonymous",
  },
  {
    id: 15,
    name: "Ellen Ullman",
    bio:
      "Ellen Ullman is an American computer programmer and author. She has written novels as well as articles for various publications, including Harper's Magazine, Wired, The New York Times and Salon.",
  },
  {
    id: 16,
    name: "C-3PO",
    bio:
      "C-3PO is a fictional character in the Star Wars franchise, first appearing in the first series entry film Star Wars in 1977.",
  },
];

// Array of quote objects
// personId maps to the list of authors
// id, quote, personId, [year]
const quotes = [
  {
    id: 1,
    quote:
      "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    personId: 15,
    year: 1998,
  },
  {
    id: 2,
    quote:
      "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    personId: 14,
    year: "",
  },
  {
    id: 3,
    quote: `If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.`,
    personId: 11,
    year: 1983,
  },
  {
    id: 4,
    quote:
      "The city’s central computer told you?  R2D2, you know better than to trust a strange computer!",
    personId: 16,
    year: "",
  },
  {
    id: 5,
    quote:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    personId: 13,
    year: 1990,
  },
  {
    id: 6,
    quote:
      "Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.",
    personId: 4,
    year: "",
  },
  {
    id: 7,
    quote: "Java is to JavaScript as ham is to hamster.",
    personId: 12,
    year: 2009,
  },
  {
    id: 8,
    quote: `The most dangerous phrase in the language is, "We've always done it this way."`,
    personId: 11,
    year: 1987,
  },
  {
    id: 9,
    quote:
      "As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.",
    personId: 10,
    year: 1979,
  },
  {
    id: 10,
    quote:
      "Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.",
    personId: 7,
    year: "",
  },
  {
    id: 11,
    quote:
      "What one programmer can do in one month, two programmers can do in two months.",
    personId: 9,
    year: "",
  },
  {
    id: 12,
    quote: "The Internet? Is that thing still around?",
    personId: 8,
    year: "",
  },
  {
    id: 13,
    quote:
      "If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.",
    personId: 6,
    year: "",
  },
];

module.exports = {
  quotes,
  authors,
};
