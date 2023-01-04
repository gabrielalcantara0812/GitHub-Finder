import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {useState, KeyboardEvent} from 'react'
import module from './Search.module.css'


type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState('')

    const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter'){
            loadUser(userName)
        }
    }

    return (
        <div className={module.search}>
            <h2>Busque por um usuário</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={module.search_container}>
                <input placeholder='Digite o nome do usuário' type='text' onKeyDown={handleKey}onChange={(e)=>{setUserName(e.target.value)}}/>
                <button onClick={() => (loadUser(userName))}><BsSearch/></button>
            </div>
        </div>
    )
}

export default Search