const NoticeData=async()=>{
    const res = await fetch("https://cpi-project-server-ayakub.vercel.app/noticeTitle");
    const data=await res.json()
    return data;
}
export default NoticeData;