

export default function NotesListPage({ note }) {
  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  
 
  
  return (

   
  
     
   <div>
    <h3>
      { note.text } 
    </h3>
      <div>
        Made at: {new Date(note.createdAt).toLocaleString()} 
      </div>
   </div>
  
   
  )
  
  }