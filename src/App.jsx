//componentes
import {GrFormNext, GrFormPrevious } from 'react-icons/gr';
import {FiSend} from 'react-icons/fi'
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from './components/Steps';


// Hooks
import {useForm} from './hooks/useForm';
import { useState } from 'react';

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) =>{
      return{...prev, [key]: value}
    } )
  }

  const formComponents = [
   <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
   <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
   <Thanks data={data}/>];

  const {currentStep, currentComponent, changeSteap, isLastSteap, isFirstStep} = useForm(formComponents);

  // Usa o hook useForm passando formComponents como argumento.
  // Desestrutura o objeto retornado, obtendo currentStep e , currentComponent, changeSteap, isLastSteap, isFirstStep.
  // Entendendo o Fluxo:
  // O hook useForm cria um estado currentStep iniciado com 0.
  // formComponents é um array de componentes que representam os passos de um formulário.
  // A cada chamada do hook, currentComponent pega o componente no índice currentStep.
  // Ao clicar em avançar é adicionado + 1 ao contador e ao voltar -1

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeSteap( currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={() => changeSteap(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
            ) }
            {!isLastSteap? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : (
              <button type='button'>
              <span>Enviar</span>
              <FiSend/>
            </button>
            )}
          </div>
        </form>
      </div>
      <div className="observacao">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/pedro-henrique-da-rocha-22496a2a0/" target='_blank'>Pedro Rocha</a> pelo curso de Formação do Matheus Battisti, Hora de Codar na udemy</p>
      </div>
    </div>
   
  )
}

export default App
