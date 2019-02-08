import React from 'react'

function GoodyBag () {
  const candies = [
    {id: 0, name: 'a', description: 'b', quantity: 12, url: 'c'},
    {id: 1, name: 'd', description: 'e', quantity: 1, url: 'f'},
  ];
  return (
    <ul> {
       candies.map(candy => (
        <li key={candy.id}>
          {candy.name}
          {candy.description}
          {candy.quantity}
          {candy.url}
        </li>
       ))
    } </ul>
  );
}

export default GoodyBag;