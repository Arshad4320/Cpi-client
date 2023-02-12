
import GuestTeacherData from './GuestTeacherData';
import '../../../src/pages/Styles/styles.css'
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
const GuestTeacher = () => {
    const { data: guest = [], isLoading,refetch } = useQuery({
        queryKey: ['guest'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Guest%20Teacher')
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
            <h2 className='text-center text-5xl my-10 font-bold font-color'>Guest Teacher</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    guest?.map((data => <GuestTeacherData 
                        data={data}
                        handleDelete={handleDelete}
                         key={data._id}></GuestTeacherData>))
                }
            </div>
        </div>
    );
};

export default GuestTeacher;