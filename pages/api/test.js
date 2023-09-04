export default function handler(req, rsc){
    if(req.method =='POST'){
        return rsc.status(200).json('처리완료')
    }
    
}