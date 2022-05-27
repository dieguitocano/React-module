
import './App.css'
import Card from './components/Card'
import PersonalInformation from './components/PersonalInformation'

function App() {

  const person = {
    name: 'Andrés',
    age: 30,
    favoriteMovie: 'Inception',
    favoriteMusic: 'Blues'
  }

  const titles = [
    'hobbies',
    'My fav food',
    'My fav music'
  ];
  
  const hobbies = [
    'Music',
    'Go to the beach',
    'Art',
    'Cooking'
  ];
  
  const favoriteFood = [
    'Italian',
    'Greek',
    'Vegetarian',
    'Sea food'
  ];

  const favoriteMusic = [
    'Pop',
    'Electronic',
    'Techno',
    'Rock',
    'Dance'
  ]

  return (
    <div className="App">
     <PersonalInformation 
        person={person} 
        title='Personal Information'/>
     <Card 
        title={titles[0]} 
        hobbie={hobbies}
        
      />
     <Card 
        title={titles[1]} 
        hobbie={favoriteFood}
        color='blue'
      />
     <Card 
        title={titles[2]} 
        hobbie={favoriteMusic}
        color='gray'
      />
    
   
    
    </div>
  )
}

export default App
