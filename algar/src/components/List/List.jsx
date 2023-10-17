import React from 'react'
import './List.css'

const List = () => {

  const lista =[
  {
    nome:"Home",
    imagem:"/assets2/home.png",
  },
  {
    nome:"Members",
    imagem:"/assets2/membros-2-x.png",
  },
  {
    nome:"Feed",
    imagem:"/assets2/feed.png",
  },
  {
    nome:"Events",
    imagem:"/assets2/eventos.png",
  },
  {
    nome:"Alert",
    imagem:"/assets2/notificao.png",
  },
   {
    nome:"Messages",
    imagem:"/assets2/mensagens.png",
  },
  {
    nome:"New post",
    imagem:"/assets2/post.png"
  },
  {
    nome:"Jobs",
    imagem:"/assets2/job.png"
  },
  {
    nome:"Search...",
    imagem:"/assets2/pesquisar-1.png"
  },  
  
  ]

  return (
    <div className="containerList">
      {lista.map((item, index) => (
        <div key={index} className="item">
          <img id="image" src={item.imagem} alt={item.nome} />
          <p>{item.nome}</p>
        </div>
      ))}
    </div>
  )
}

export default List
