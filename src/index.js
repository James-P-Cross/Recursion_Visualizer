import './styles/main.scss';


console.log('test');
//webpage is now running on port 5500
//creating tests to DOM
// const heading = document.createElement('h1');
// heading.textContent = 'Interesting';

// const app = document.querySelector('#root');
// app.append(heading);

// Create a class property without a constructor
class Game {
    name = 'Violin Charades'
  }
  const myGame = new Game()
  // Create paragraph node
  const p = document.createElement('p')
  p.textContent = `I like ${myGame.name}.`
  
  // Create heading node
  const heading = document.createElement('h1')
  heading.textContent = 'Interesting!'
  
  // Append SVG and heading nodes to the DOM
  const app = document.querySelector('#root')
  app.append(heading, p)