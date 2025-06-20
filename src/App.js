import logo from './logo.svg';
import './App.css';
import SvgBox from './SvgBox'; 
import { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar , ListSubheader} from '@mui/material';

function App() {
  // const openai_models = ['gpt-4o-mini', 'gpt-40-pro'];
  const openai_models = ['gpt-4.1',
'gpt-4.1-mini',
'gpt-4.1-nano',
'o4-mini',
'o3-mini',
'o3',
'o1-mini',
'o1-preview',
'gpt-4o-mini',
'gpt-4o-mini-2024-07-18',
'gpt-4o',
'gpt-4o-2024-08-06',
'gpt-4o-2024-05-13',
'gpt-4-turbo',
'gpt-4-turbo-preview',
'gpt-4-0125-preview',
'gpt-4-1106-preview',
'gpt-3.5-turbo-1106',
'gpt-3.5-turbo',
'gpt-3.5-turbo-0301',
'gpt-3.5-turbo-0613',
'gpt-3.5-turbo-16k',
'gpt-3.5-turbo-16k-0613',
'gpt-4',
'gpt-4-0613',
'gpt-4-32k-0314',
'gpt-4-32k-0613'];
  const anthropic_models = ['claude-3-haiku-20240307','claude-3-opus-20240229',];
  const models = openai_models;

//  'claude-3-sonnet-20240229',
//  'claude-2',];
 const prompt = 'a pelican riding a bicycle';


// try {
// }catch {

// }
// const data = [
//   {
//     model: 'gpt-4o-mini',
//     svg_text:`
//             <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" aria-label="Pelican illustration" role="img">
//         <!-- Body -->
//         <ellipse cx="100" cy="90" rx="60" ry="40" fill="#c8c8c8" stroke="#555" stroke-width="2"></ellipse>
        
//         <!-- Head -->
//         <circle cx="140" cy="60" r="25" fill="#ddd" stroke="#555" stroke-width="2"></circle>
        
//         <!-- Eye -->
//         <circle cx="150" cy="55" r="6" fill="#333"></circle>
//         <circle cx="152" cy="53" r="2" fill="#fff"></circle>
        
//         <!-- Beak upper -->
//         <path d="M160 70 Q190 70 180 90 Q160 90 160 70 Z" fill="#f4a261" stroke="#b35618" stroke-width="2"></path>
        
//         <!-- Beak lower -->
//         <path d="M160 90 Q180 100 170 105 Q160 95 160 90 Z" fill="#e07b39" stroke="#b35618" stroke-width="2"></path>
        
//         <!-- Wing -->
//         <path d="M70 90 Q90 40 120 80 Q90 90 70 90 Z" fill="#a0a0a0" stroke="#555" stroke-width="2"></path>
        
//         <!-- Tail -->
//         <path d="M40 110 L20 130 L40 120 Z" fill="#888" stroke="#555" stroke-width="2"></path>
//         </svg>`
//   },
//     {
//     model: 'gpt-4o-pro',
//     svg_text:`
//             <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" aria-label="Pelican illustration" role="img">
//         <!-- Body -->
//         <ellipse cx="100" cy="90" rx="60" ry="40" fill="#c8c8c8" stroke="#555" stroke-width="2"></ellipse>
        
//         <!-- Head -->
//         <circle cx="140" cy="60" r="25" fill="#ddd" stroke="#555" stroke-width="2"></circle>
        
//         <!-- Eye -->
//         <circle cx="150" cy="55" r="6" fill="#333"></circle>
//         <circle cx="152" cy="53" r="2" fill="#fff"></circle>
        
//         <!-- Beak upper -->
//         <path d="M160 70 Q190 70 180 90 Q160 90 160 70 Z" fill="#f4a261" stroke="#b35618" stroke-width="2"></path>
        
//         <!-- Beak lower -->
//         <path d="M160 90 Q180 100 170 105 Q160 95 160 90 Z" fill="#e07b39" stroke="#b35618" stroke-width="2"></path>
        
//         <!-- Wing -->
//         <path d="M70 90 Q90 40 120 80 Q90 90 70 90 Z" fill="#a0a0a0" stroke="#555" stroke-width="2"></path>
        
//         <!-- Tail -->
//         <path d="M40 110 L20 130 L40 120 Z" fill="#888" stroke="#555" stroke-width="2"></path>
//         </svg>`
//   }
// ]

  return (
    <div className="App">
      <ImageList>
        <ImageListItem>
          <ListSubheader component="div"> A pelican on a bike</ListSubheader>
        </ImageListItem>
        {models.map((model, index) => (
          <ImageListItem key={index}>
            <SvgBox model={model} prompt={prompt} />
            <ImageListItemBar title={model} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default App;
