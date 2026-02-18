
export function AdviceText({advice}){
 
      
    return(
        <>
             <div className='advice-text-container'>
                {advice && `"${advice.slip.advice}"`}
             </div>
        </>
    )
}