
export function Invitation(props)
{
    return (
        <div> <h>Subject : {props.subject}</h>  
        <p> To : {props.to}</p>
         
        <p> Hi , {props.name} </p>
         
         <p>I am having a {props.party} next Friday at my Home . Would you like to come ? It will be fun .
          Lots of people from my school are coming . you know some of them - {props.name1} , {props.name2} , {props.name3} .</p>
          <p>        My house is behind our school , near {props.location} .
         </p>        
           <p>        I hope you will come and see you soon .
           </p>        
             <p>from , </p>
             <p>{props.name}</p>
     </div>
    )
      
}