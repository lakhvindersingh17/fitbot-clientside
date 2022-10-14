const Grid=({data,RenderCompomnent})=>{
    console.log(data,'data')
    
    if(data.length==0) return null
    return(

        <>
        <div className="grid">
        {data.map((value)=>(

            <div className="gridItem">
            
                {RenderCompomnent(value)}
            </div>
        ) )}

        </div>
        <style jsx>{`
            .grid{
                display:grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap:5px;
            }

        `}
             </style>
        </>
    )
}

export default Grid;