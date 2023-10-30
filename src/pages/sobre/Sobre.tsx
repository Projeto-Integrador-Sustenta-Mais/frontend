import img from '../../assets/eag.jpeg'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <div className="w-screen flex justify-center p-16 items-center ">

        <div className='w-2/4 '>
          <img src={img} alt="img"/> 
        </div>
               
        <div className="max-w-7xl flex flex-col items-center w-2/4 ml-8">
          <h1 className="text-lime-400 text-4xl mb-8">Sobre Nós</h1>

          <p>Com orgulho, destacamos que nosso Marketplace Sustentável é um projeto da Generation Brasil, desenvolvido em estreita colaboração entre nossos dedicados colegas. Este projeto foi concebido com base no tema das Objetivos de Desenvolvimento Sustentável (ODS) da ONU, com foco específico no objetivo de "Consumo e Produção Sustentáveis".
          <br></br>
          <br></br>
          Nossa parceria com a ONU e nosso compromisso com os ODS refletem nossa determinação em contribuir de forma significativa para a construção de um mundo mais sustentável. Entendemos que o consumo responsável desempenha um papel fundamental na promoção do bem-estar das pessoas e na proteção do planeta.
          <br></br>
          <br></br>
          Nossa plataforma não apenas adere aos princípios dos ODS, mas também se esforça para ser um exemplo vivo de como o comércio e o consumo podem estar alinhados com essas metas globais. Ao integrar os ODS em nosso projeto, aspiramos a ser líderes na promoção de um consumo mais consciente e responsável, demonstrando que é possível alcançar o sucesso comercial enquanto se trabalha para o bem comum.
          <br></br>
          <br></br>
          Além disso, nossa colaboração com a Generation Brasil traz um valor inestimável ao nosso projeto. Esta parceria é uma união de mentes apaixonadas e comprometidas com a missão de transformar a maneira como as pessoas consomem e como as empresas operam. Trabalhando juntos, compartilhamos conhecimentos, recursos e ideias para desenvolver soluções inovadoras que impulsionam o avanço da sustentabilidade.
          <br></br>
          <br></br>
          Juntos, estamos empenhados em fazer deste Marketplace Sustentável um farol de esperança e um modelo para o futuro, promovendo a transformação positiva e a construção de um mundo onde a sustentabilidade e o bem-estar de todos estão no centro de nossas ações e decisões. Nossa visão é que, por meio dessa colaboração, possamos criar uma comunidade global de consumidores, vendedores e parceiros que compartilham nosso compromisso com um mundo mais sustentável e justo, onde as escolhas de consumo são guiadas pelo respeito ao meio ambiente e pelo bem-estar da sociedade. Estamos ansiosos para trilhar este caminho juntos, impulsionando a mudança e fazendo a diferença em prol do planeta e de todos que nele habitam.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sobre