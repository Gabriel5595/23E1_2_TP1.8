import './App.css'

export default function App() {

    const valores_A = [1500, 1550, 1503];
    const valores_B = [1900, 1910, 1930];

    // Substitua essa linha por uma que utilize o operador spread
    //const todos_valores = (valores_A.concat(valores_B));
    const todos_valores = [...valores_A, ...valores_B];
    // Não modifique daqui em diante
    const mainContainer = <main>
        <strong>Preços:</strong>
        <ul>
            {todos_valores.map(x => <li key={x}>{x}</li>)}
        </ul>
    </main>;
    return mainContainer

}