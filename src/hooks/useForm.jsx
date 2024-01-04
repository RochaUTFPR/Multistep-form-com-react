import { useState } from "react";

// useState:

// Importa useState do React, que é um Hook usado para gerenciar o estado em componentes de função.
//Exemplo de Hook criavel
// Define um estado currentStep usando useState(0), iniciando o estado com o valor 0.
// Retorno do Hook:

// Retorna um objeto com duas propriedades: currentStep e currentComponent.
// currentStep contém o valor do estado currentStep.
// currentComponent obtém o componente do array steps correspondente ao índice currentStep
// isFirstStep e isLastSteap são para verificar o começo e o final do array
// if(e) e.preventDefault(); previnir o recarregamento da pagina se o evento que é o parametro e for passado, ou seja se o botão de avançar for clicado

export function useForm (steps) {
    const [currentStep, setCurrenteStep] = useState(0);

    function changeSteap( i ,e) {
        
        if(e) e.preventDefault();

        if( i < 0 || i >= steps.length) return

        setCurrenteStep(i)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeSteap,
        isLastSteap: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    };
}