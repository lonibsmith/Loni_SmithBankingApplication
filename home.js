document.body.style.backgroundImage = "url ('bank.jpg')";
function Home(){
  return (
    <Card
      bgcolor="Black"
      txtcolor="White"
      header="Bad Bank"
      title="Best Banking Application Currently Available!"
      text="Welcome to Bad Bank "
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
      
    />    
    
  ); 
}

