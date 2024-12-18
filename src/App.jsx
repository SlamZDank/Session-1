import './App.css'
import FunctionalComponent from './FunctionalComponent' // this needs to be included in order to be used in the jsx element

function App() {
  const collection = [1, 3, 4, 5, 6, 7, 9, 21, 3]

  // The map function will return a new array that will be
  // the same length as the original array but with each
  // element modified (multiplied by 4 in this example) 
  const collectionMapped = collection.map((value) => {
    return value * 4;
  })
  console.log(collectionMapped)

  // The filter function will return a new array that will
  // contain elements that match the condition
  // in this case, only even numbers are included
  const collectionFiltered = collection.filter((value, index)=> {
    return (value % 2 === 0)
  })
  console.log(collectionFiltered)


  // The reduce function will return a single value
  // that is determined by the return statement
  // in this case, only even numbers are included in the sum
  const collectionReduced = collection.reduce((prevValue, currentValue) => {
    if (currentValue % 2 === 0) {
      return prevValue + currentValue
    }
    return prevValue
  }, 0)

  console.log(collectionReduced)

  // ONE JSX element MUST BE RETURNED
  // we can use tags that resemble html
  // and we can also include a custom tag that we created
  // ourselfs in a different file which is the Functional component
  return (
    <>
      <br></br>  
      <FunctionalComponent/>
    </>
  )

}

export default App
