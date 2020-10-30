const search = document.getElementById('search')
const submit = document.getElementById('submit')
const random = document.getElementById('random')
const mealsEl = document.getElementById('meals')
const resultHeading = document.getElementById('result-heading')
const single_mealEl = document.getElementById('single-meal')







//search meal and fetch from API

const searchMeal=(e)=>{
    e.preventDefault();

    //clear single_meal

    // single_mealEl.innerHTML=''



    //get search term

    const term = search.value;


    //check for empty



   if(term.trim())
   {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            resultHeading.innerHTML=`
            
            <h2>Search Result for ${term}</h2>
            
            `

            if(data.meals===null)
            {
                resultHeading.innerHTML=`
            
                <p>There are no Search result... Try again!</p>
                
                `
            }

            else
            {
                mealsEl.innerHTML=data.meals.map((value,index)=>
                    `
                        <div class='meal'>
                        
                                         <img src='${value.strMealThumb}' alt='error'/>
                                         <div class='meal-info'  data-mealID='${value.idMeal}'>
                                     
                                         <h3>${value.strMeal}</h3>
                                     
                                     </div>
                        
                        </div>
                    
                    `
                )
            }
        })
   }
   else
   {
       alert('Please enter value to search...')
   }

   document.getElementById('search').value=''
    
}



//Event Listeners


submit.addEventListener('submit',searchMeal)







