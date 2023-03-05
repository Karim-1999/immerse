
const Articles = ({ blogs, user, handleDelete }) => {
  
     
    <>
        {blogs?.map((item) => (
            {
                id: item.id,
                image: item.urlImg,
                title: item.title,
                data: item.timestamp.toDate().toDateString(),
                category: item.category    
            }
           
            
                
        ))} 
    </>
}
            
  
  export default Articles;