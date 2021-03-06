const newPostHelper = {

    validNotification : {
        field:"Testfield",
        message:"TestMessage"
    },

    testPost : {
        content:"test",
        img:"test",
        likes:0
    },

    validContent () {
        return "Test content"},

    validImg () {
        return "Test Img"},

    emptyString: "",

    expectedObject () {
        return {
        content:this.validContent,
        img: this.validImg,
        likes:0
        }
    },

    expectedError : {       
        field:"Post",
        message:"Content and img url must be supplied"
    }
}
export default newPostHelper