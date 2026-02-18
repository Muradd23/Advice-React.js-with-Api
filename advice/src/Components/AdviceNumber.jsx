
export function AdviceNumber({advice}){

    return(
        <>
             <div className="advice-number-container">
                       {advice && `ADVICE # ${advice.slip.id}`}
            </div>
        </>
    )
}