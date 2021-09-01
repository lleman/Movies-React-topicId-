import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Topic from './Components/Topic'

function App() {

  const [state, setState] = useState([
    {
      name:'Eternal Sunshine of the Spotless Mind',
      id: 228,
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/eff9c25abf9476807dab9997fec31c1509f87532dce56ff26f95bb3e69aba7a5._RI_V_TTW_.jpg',
      title: 'Eternal Sunshine of the Spotless Mind',
      year: '2004',
      category: 'Romance, Sci-fi',
      stars:'Jim Carrey, Kate Winslet, Tom Wilkinson ',
      info: 'After a painful breakup, Clementine (Kate Winslet) undergoes a procedure to erase memories of her former boyfriend Joel (Jim Carrey) from her mind. When Joel discovers that Clementine is going to extremes to forget their relationship, he undergoes the same procedure and slowly begins to forget the woman that he loved. Directed by former music video director Michel Gondry, the visually arresting film explores the intricacy of relationships and the pain of loss.'
    },
    {
      name:'The Curious Case of Benjamin Button',
      id: 229,
      poster:'https://m.media-amazon.com/images/M/MV5BNjQ0NTY2ODY2M15BMl5BanBnXkFtZTgwMjE4MzkxMDE@._V1_.jpg',
      title: 'The Curious Case of Benjamin Button',
      year: '2008',
      category: 'Romance, Fantasy, Drama',
      stars:'Brad Pitt, Cate Blanchett, Tilda Swinton ',
      info: 'Born under unusual circumstances, Benjamin Button (Brad Pitt) springs into being as an elderly man in a New Orleans nursing home and ages in reverse. Twelve years after his birth, he meets Daisy, a child who flickers in and out of his life as she grows up to be a dancer (Cate Blanchett). Though he has all sorts of unusual adventures over the course of his life, it is his relationship with Daisy, and the hope that they will come together at the right time, that drives Benjamin forward.'
    },
    {
      name:'Gone Girl',
      id: 230,
      poster:'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg',
      title: 'Gone Girl',
      year: '2014',
      category: 'Thriller, Mystery',
      stars:' Ben Affleck, Rosamund Pike, Neil Patrick Harris',
      info:"In Carthage, Mo., former New York-based writer Nick Dunne (Ben Affleck) and his glamorous wife Amy (Rosamund Pike) present a portrait of a blissful marriage to the public. However, when Amy goes missing on the couple's fifth wedding anniversary, Nick becomes the prime suspect in her disappearance. The resulting police pressure and media frenzy cause the Dunnes' image of a happy union to crumble, leading to tantalizing questions about who Nick and Amy truly are."
    },
    {
      name:'Shutter Island',
      id: 231,
      poster:'https://images-na.ssl-images-amazon.com/images/I/916VtXkyrHL._SY445_.jpg',
      title: 'Shutter Island',
      year: '2010',
      category: 'Thriller, Mystery',
      stars:'Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo',
      info: 'The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room, and there are hints of terrible deeds committed within the hospital walls. As the investigation deepens, Teddy realizes he will have to confront his own dark fears if he hopes to make it off the island alive.'
    },
    {
      name:'Black Swan',
      id: 232,
      poster:'https://images-na.ssl-images-amazon.com/images/I/615yWgAir2L._AC_SY679_.jpg',
      title: 'Black Swan',
      year: '2010',
      category: 'Thriller, Drama',
      stars:'Natalie Portman, Mila Kunis, Vincent Cassel',
      info: "Nina (Natalie Portman) is a ballerina whose passion for the dance rules every facet of her life. When the company's artistic director decides to replace his prima ballerina for their opening production of 'Swan Lake,' Nina is his first choice. She has competition in newcomer Lily (Mila Kunis) however. While Nina is perfect for the role of the White Swan, Lily personifies the Black Swan. As rivalry between the two dancers transforms into a twisted friendship, Nina's dark side begins to emerge."
    }
  ])
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home movies={state} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/movies/:topicId">
          <Topic movies={state} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
      </BrowserRouter>
  );
}

export default App;
