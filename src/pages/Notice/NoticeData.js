const NoticeData=async()=>{
    const res = await fetch("http://localhost:5000/noticeTitle");
    const data=await res.json()
    return data;
}
export default NoticeData;