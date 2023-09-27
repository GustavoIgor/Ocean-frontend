import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Mandaçaia',
    imagemUrl: 'https://mandacaiasocial.com.br/wp-content/uploads/2021/09/abelha-mandacaia-01.jpg',
    tags: ['Melipona quadrifasciata']
  }
  const item2 = {
    nome: 'Jataí',
    imagemUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_Fp1zZQDjHoI_46WL-N5xQ.jpeg',
    tags: ['Tetragonisca angustula']
  }

  const item3 = {
    nome: 'Guaraipo',
    imagemUrl: 'https://meliponariofarroupilha.com.br/wp-content/uploads/2022/04/Guaraipo-768x384.png',
    tags: ['Melipona bicolor schencki']
  }


  const itens = [item1, item2, item3]

  return (
    <>
      {itens.map(function (item) {
        return <Card item = {item}/>
      })}
    </>
  )
}

export default App
