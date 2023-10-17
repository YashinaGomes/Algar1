import React from 'react'
import './Chat.css'

const Chat = () => {

  const Chat =[
    {
      nome:"Chat",
      imagem:"/assets2/chat.png",
    },
    {
    nome:"Yashina",
    imagem:"/assets2/yashina.svg",
  },
  {
    nome:"Felipe Gomes",
    imagem:"/assets2/felipe.svg",
  },
  {
    nome:"Michele",
    imagem:"/assets2/michele.svg",
  },
  {
    nome:"Lesley",
    imagem:"/assets2/lesley.svg",
  },
  {
    nome:"Ana Paula",
    imagem:"/assets2/anapaula.svg",
  },
   {
    nome:"Romario",
    imagem:"/assets2/romario.svg",
  },
  {
    nome:"Bruna",
    imagem:"/assets2/bruna.svg"
  },
  {
    nome:"Bethania",
    imagem:"/assets2/bethania.svg"
  },
  
  ]

  return (
    <div className="containerChat">
      {Chat.map((item, index) => (
        <div key={index} className="itemChat">
          <img id="imageChat" src={item.imagem} alt={item.nome} />
          <p>{item.nome}</p>
        </div>
      ))}
    </div>
  )
}

export default Chat
