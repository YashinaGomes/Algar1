import React from 'react'
import logo2 from '../../assets/logo2.png'
import agil from '../../assets/agil.png'
import curtir from '../../assets/curtir.png'
import escrever from '../../assets/escrever.png'
import perfil from '../../assets/ellipse-1.png'
import './About.css'


const About = () => {
  return (
    <section className="container">
      <section className="content">
          <div className="contentLogo">
            <img src={logo2} alt="" />

            <div className="info">
            <h3>Instituto Algar</h3>
            <p>Grupo  Algar | Empresa </p>
            </div>
           
          </div>

          <div className="text">
            <p>
            A Metodologia Ágil é uma abordagem flexível e colaborativa para gerenciamento de projetos e desenvolvimento de produtos. Seus princípios fundamentais enfatizam a importância das pessoas, da entrega contínua de valor, da colaboração com o cliente e da capacidade de adaptação às mudanças. Os benefícios incluem entrega mais rápida, maior flexibilidade, satisfação do cliente e melhor qualidade. Essa abordagem está transformando a maneira como trabalhamos e é essencial para lidar com a complexidade e a volatilidade dos projetos atuais. <br />
    <span className="span">#InstitutoAlgar </span>     
    <span className="span">#MetologiaAgil</span>       
            </p>
 </div>
    <figure>
      <img src={agil} alt="" />
   </figure>

   <img src={curtir} alt="" />
   <img src={escrever} alt="" />

   <section className='dev'>

  <div className='devPerfil'>
    <img src={perfil} alt="" />

    <div className='devContent'>
      <h3>Yáshina Gomes </h3>
    <p> Desenvolvedora Web | Front-end | UI/UX Design </p>
    </div>

 
  </div>
  <div className="agilidade">
    <p>
    A Metodologia Ágil é uma verdadeira revolução na forma como abordamos projetos e desenvolvemos produtos. Ela coloca as pessoas no centro do processo, promovendo a colaboração, a flexibilidade e a adaptação constante. A ênfase na entrega contínua de valor e na interação direta com os clientes ajuda a garantir que os produtos atendam às suas reais necessidades.
Eu realmente acredito que a Metodologia Ágil veio para ficar e é uma poderosa ferramenta para impulsionar a inovação e a entrega de resultados de alta qualidade. É emocionante ver como essa mentalidade está sendo adotada em diferentes setores e estou ansioso para ver como ela continuará a evoluir no futuro.A Metodologia Ágil é uma verdadeira revolução na forma como abordamos projetos e desenvolvemos produtos. Ela coloca as pessoas no centro do processo, promovendo a colaboração, a flexibilidade e a adaptação constante. A ênfase na entrega contínua de valor e na interação direta com os clientes ajuda a garantir que os produtos atendam às suas reais necessidades.
Eu realmente acredito que a Metodologia Ágil veio para ficar e é uma poderosa ferramenta para impulsionar a inovação e a entrega de resultados de alta qualidade. É emocionante ver como essa mentalidade está sendo adotada em diferentes setores e estou ansioso para ver como ela continuará a evoluir no futuro.
    </p>
    </div>

</section>



</section>

    </section>

  
  )
}

export default About