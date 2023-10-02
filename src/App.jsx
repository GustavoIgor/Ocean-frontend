import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {
  // const item1 = {
  //   nome: 'Mandaçaia',
  //   imagemUrl: 'https://mandacaiasocial.com.br/wp-content/uploads/2021/09/abelha-mandacaia-01.jpg',
  //   tags: ['Melipona quadrifasciata']
  // }
  // const item2 = {
  //   nome: 'Jataí',
  //   imagemUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_Fp1zZQDjHoI_46WL-N5xQ.jpeg',
  //   tags: ['Tetragonisca angustula']
  // }

  // const item3 = {
  //   nome: 'Guaraipo',
  //   imagemUrl: 'https://meliponariofarroupilha.com.br/wp-content/uploads/2022/04/Guaraipo-768x384.png',
  //   tags: ['Melipona bicolor schencki']
  // }
  // const itens = [item1, item2, item3]

  const [itens, setItens] = useState([])
  // useState do React traz duas coisas:
  // 1. O estado contendo o valor
  // 2. A função que atualiza o valor do estado
  //    Quando executada, a função também re-renderiza

  async function carregarDadosApi(){
    console.log('carregarDadosApi')

    const response = await fetch("https://rickandmortyapi.com/api/character")

    const json = await response.json()

    const results = json.results

    console.log(results)
    setItens(results)
  }

  // useEffect recebe duas informações:
  // 1. Função contendo o código que será protegido pelo useEffect.
  // 2. Dependências que controlam a execução do useEffect.
  //    Array vazio para executar apenas 1 vez.
  useEffect(function(){
    carregarDadosApi()
  },[])

  
  return (
    <>
    <div className="card-list">
      {itens.map(function (item, index) {
        return <Card item={item} key={`card_${index}`} />
      })}
    </div>
    </>
  )
}

export default App
