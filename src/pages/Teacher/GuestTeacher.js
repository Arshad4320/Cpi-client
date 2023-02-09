
import GuestTeacherData from './GuestTeacherData';
import '../../../src/pages/Styles/styles.css'
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
const GuestTeacher = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/addTeacher/Guest%20Teacher')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
    const { data: guest = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Guest%20Teacher')
                .then(res =>
                    res.json()
                )
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-5xl my-10 font-bold font-color'>Guest Teacher</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    guest?.map((data => <GuestTeacherData data={data} key={data._id}></GuestTeacherData>))
                }
            </div>
        </div>
    );
};

export default GuestTeacher;