import {useState} from 'react';
import { AddCategory } from './components';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  } 

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={onAddCategory} // propietat propia
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))}
    </>
  )
}
