import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // preven de fer el submit normal (recarregar la pagina)
        if(inputValue.trim().length <= 1) {
            return;
        }
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}