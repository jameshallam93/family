
    export const generatePost = (content, img) =>{
        if (! (content && img)){
            return null
        }
        return {
            content: content,
            img: img,
            likes:0
        }
    }
    export const generatePostErrors =  (post) =>{
       if (post === null){
           return {
               field:"Post",
               message:"Content and img url must be supplied"
           }
       }
    }
