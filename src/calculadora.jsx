import React, { useState } from "react";

const index = () => {
    const [peso,SetPeso] = useState()
    const [altura,SetAltura] = useState()
    const [result,SetResult] = useState(0)

    function CalcIMC(){
        const imc = peso / (altura*altura)
        SetResult(imc.toFixed(1))
    }

    return(
        <div>
            <main>
            <h1>Calculadora <br/> IMC</h1> <br />
            <input 
            type="number"
            placeholder="PESO (Kg)"
            onChange={(e) => SetPeso(+e.target.value)}
            />

            <input 
            type="number"
            placeholder="ALTURA (M)" 
            onChange={(e) => SetAltura(+e.target.value)}/>
            <br/> 

            <button onClick={CalcIMC}>CALCULAR</button> 
            <br />
            <h1>O seu IMC é {result}</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menor que 18,5</td>
                            <td>Abaixo do peso normal</td>
                        </tr>
                        <tr>
                            <td>18,5 - 24,9</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td>25 - 29,9</td>
                            <td>Excesso de Peso</td>
                        </tr>
                        <tr>
                            <td>30 - 34,9</td>
                            <td>Obesidade Classe 1</td>
                        </tr>
                        <tr>
                            <td>35 - 39,9</td>
                            <td>Obesidade Classe 2</td>
                        </tr>
                        <tr>
                            <td>Maior ou igual a 40</td>
                            <td>Obesidade Classe 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <h1>O que é IMC?</h1>
            <p>Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários profissionais de saúde, incluindo médicos, enfermeiros e nutricionistas, para saber, de uma forma rápida, se a pessoa precisa ganhar ou perder peso.*</p>
            </main>
            <footer>
                <p>Desenvolvido por <a href="https://github.com/MateusMCalderam">Mateus M Calderam</a></p> <br />
                <p>*IMC: o que é, como calcular e tabela de resultados. Disponível em: <a href="https://www.tuasaude.com/imc/">https://www.tuasaude.com/imc/.</a></p>
            </footer>
        </div>
    )

}
export default index;
