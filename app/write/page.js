import React from 'react';

const page = () => {
    
    return (
        <div className='write-wrap'>
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input type="text" name="title" placeholder='글제목' />
                <textarea name="content" placeholder='글내용' />
                <input style={{display :'none'}}name="_id" defaultValue={result._id.toString()}/>
                <button>버튼</button>
            </form>
        </div>
    );
};

export default page;