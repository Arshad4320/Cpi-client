import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import ChipInstructorData from "./ChipInstructorData";


const ChipInstructor = () => {
  
    const { data: chiefinstructor = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Chief%20Instructor')
                .then(res =>
                    res.json()
                )
    })
    
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-5xl my-10 font-bold font-color'>Chief Instructor</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {
                    chiefinstructor.map((data) => <ChipInstructorData data={data} key={data._id}></ChipInstructorData>)
                }
            </div>
        </div>
    );
};

export default ChipInstructor;