import './App.css';

import { useGetAllPostQuery,useGetPostByIdQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation } from './serives/post';

function App() {

  //const responseInfo = useGetAllPostQuery() 
  //const responseInfo = useGetPostByIdQuery(5) 
  //const responseInfo = useGetPostByLimitQuery(6)
  //const [deletePost,responseInfo] = useDeletePostMutation()
  //const [createPost,responseInfo] = useCreatePostMutation()
  const [updatePost,responseInfo] = useCreatePostMutation()

  const newPost = {
    title:'This is new title',
    body: 'this is new body',
    userId : 1
  }

  
  const updatePostData = {
    id : 1,
    title:'This is update post title',
    body: 'this is update post body',
    userId : 1
  }



  console.log("Response  Information: ",responseInfo)
  console.log("Data  : ",responseInfo.data)
  console.log("Success  : ",responseInfo.isSuccess)

  if (responseInfo.isLoading) {
    return <div>
      Loading....
    </div>
  }

  if (responseInfo.isError) {
    return <div>
      <h1>Error occured {responseInfo.error.error}</h1>
    </div>
  }


  return (
    //get all data
    // <div className="App">
    //     <h1> 
    //       Redux Toolkit - RTK Query (Get All Data) 
    //       {
    //         responseInfo.data.map((post) => (
    //           <div>

    //             <p className='title light'>{post.id}:  {post.title}</p>
    //             <p className='title'>{post.body}</p>

    //             <hr/>
    //           </div>
    //         ))
    //       }
    //     </h1>
    // </div>


    //Get Single Id data
    // <div className='App'>
    //  <h1> Redux Toolkit - RTK Query (Get Single Data)</h1>   
    //  <h2>
    //     {responseInfo.data.id}: {responseInfo.data.title}
    //   </h2>   
    // </div>


    //Get Limited Data
    // <div className="App">
    //     <h1> 
    //       Redux Toolkit - RTK Query (Get Limited Data) 
    //       {
    //         responseInfo.data.map((post,id) => (
    //           <div key={id}>
    //             <p className='title light'>{post.id}:  {post.title}</p>
    //             <p className='title'>{post.body}</p>
    //             <hr/>
    //           </div>
    //         ))
    //       }
    //     </h1>
    // </div>


    // //DELETE DATA 

    // <div className='App'>
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button onClick={() => {deletePost(2)}}>Delete Post</button>
    // </div>



    //CREATE DATA 
    // <div className='App'>
    //   <h1>Redux Toolkit - RTK Query (Create Data)</h1>
    //   <button onClick={() => {createPost(newPost)}}>Create Post</button>
    // </div>

    //UPDATE DATA 
    <div className='App'>
      <h1>Redux Toolkit - RTK Query (Update Data)</h1>
      <button onClick={() => {updatePost(updatePostData)}}>Update Post</button>
    </div>




  );
}

export default App;
