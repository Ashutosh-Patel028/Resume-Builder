// import "../../../public/images/profile.jpg"

const fileReducer = (file="../../../public/images/profile.jpg", action) => {
    switch(action.type){
        case "MANAGE_FILE":
            return action.payload;
        default:
            return file;
    }
}
export default fileReducer