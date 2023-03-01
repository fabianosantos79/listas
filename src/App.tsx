import { Pessoa } from './components/Pessoa'

const App = () => {
  let list = [
    {name: 'Fabiano', age:43},
    {name: 'Viviane', age:43},
    {name: 'Marcio', age:14},
    {name: 'Fernando', age:3},
    {name: 'Isabela', age:1}
  ]

  return(
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map((item, index) => (
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  )
}

export default App;
