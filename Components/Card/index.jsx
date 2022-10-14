const Card=({data})=>{

    console.log(data)
    return (<>
    <div className="card">
        <div className="cardMedia">
         {data?.City?.ImageURL ?   
        <img src={data?.City?.ImageURL}/>:
        <p>No Image</p>
         }

        </div>
        <div>
            <h4>{data.Name}</h4>
            <div className="addDetail">
                <span>{data.Email}</span>
                <span>
                    {data?.City?.City}
                </span>
            </div>
        </div>

    </div>

    <style jsx>{`

        .card{
            max-width:300px;
            border-radius:10px;
        }
        .cardMedia{

            display:flex;
            align-item:center;
            justify-content:center;
            width:100%;
            height: 100px;
            background:lightblue;



        }

        .addDetail{
            display: flex;
            flex-direction: column;
        }
        img{
            width:100%;
            height:100px;
        }
        
        `
    }
    </style>
    </>
    )
    
}

export default Card