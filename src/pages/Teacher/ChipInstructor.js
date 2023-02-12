import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";
import ChipInstructorData from "./ChipInstructorData";


const ChipInstructor = () => {
  
    const { data: chiefinstructor = [], isLoading ,refetch} = useQuery({
        queryKey: ['cef'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Chief%20Instructor')
                .then(res =>
                    res.json()
                )
    })
    function handleDelete (id) {
        const permisson = window.confirm('are you sure ,deleted seller?')
        if (permisson) {
            fetch(`http://localhost:5000/teacher/${id}`, {
                 method: 'DELETE'
            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'Deleted',
                            title: 'Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        refetch()
                    }
                    console.log(data)

                })
        }

    }
    
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-5xl my-10 font-bold font-color'>Chief Instructor</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {
                    chiefinstructor.map((data) => <ChipInstructorData
                    handleDelete={handleDelete}
                     data={data}
                      key={data._id}></ChipInstructorData>)
                }
            </div>
        </div>
    );
};

export default ChipInstructor;